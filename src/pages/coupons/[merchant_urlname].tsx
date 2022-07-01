import { useState } from 'react';
import DealItems from '../../components/DealItems';
import DealModal, { OptionalDeal } from '../../components/DealModal';
import Deal from '../../interfaces/deal';

interface Data {
  merchant_name: string;
  deals: Deal[];
}

export default function CouponsShow({ data }: { data: Data; }) {
  const deals = data.deals;
  const merchant_name = data.merchant_name;
  const [modalDeal, setModalDeal] = useState<OptionalDeal>(undefined);
  const dealClick = (deal: Deal) => {
    setModalDeal(deal);
  };

  return (
    <div>
      <DealModal deal={modalDeal} merchant_name={merchant_name} />
      <DealItems deals={deals} setModal={dealClick} />
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { merchant_urlname: string; }; }) {
  const req = await fetch(`http://localhost:3000/deal-data/${params.merchant_urlname}.json`);
  const data = await req.json();

  return {
    props: { data: data }
  };
}