import DealItems from '../../components/DealItems';
import DealModal, { OptionalDeal } from '../../components/DealModal';
import Deal from '../../interfaces/deal';
import { useRouter } from 'next/router';

interface Data {
  merchant_name: string;
  deals: Deal[];
}

export default function CouponsShow({ data }: { data: Data; }) {
  const deals = data.deals;
  const merchant_name = data.merchant_name;

  const { query } = useRouter();
  const openValue = query.open as string;
  const modalDeal = findModalDeal(openValue, deals);

  return (
    <div>
      {modalDeal && <DealModal deal={modalDeal} merchant_name={merchant_name} />}
      <DealItems deals={deals} />
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { merchant_urlname: string, open?: string; }; }) {
  const req = await fetch(`http://localhost:3000/deal-data/${params.merchant_urlname}.json`);
  const data = await req.json();

  return {
    props: { data: data }
  };
}

function findModalDeal(openValue: string, deals: Deal[]): OptionalDeal {
  if (openValue) {
    const modalDeal = deals.filter((deal: Deal) => deal.id.toString() === openValue)[0];
    if (modalDeal) {
      return modalDeal;
    }
  }
  return undefined;
}