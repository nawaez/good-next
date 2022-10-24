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
  //const req = await fetch(`http://localhost:3000/deal-data/${params.merchant_urlname}.json`);
  //const data = await req.json();

  return {
    props: { data: {
      "merchant_name": "orbitz",
      "deals": [
        {
          "id": 57452102,
          "badge_text": "10%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Special deal: Get 10% off at Orbitz",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57452102&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57452102?partner=hawaii",
          "terms": "",
          "code": "SAVEAPP10"
        },
        {
          "id": 58418305,
          "badge_text": "15%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Coupon promo code for 15% Off Sitewide",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58418305&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58418305?partner=hawaii",
          "terms": "",
          "code": "HOTEL15"
        },
        {
          "id": 57180957,
          "badge_text": "40%",
          "badge_text_type": "number",
          "type": "deal",
          "text": "Limited offer: Spring for a Getaway: Save 40% or More on Hotels",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57180957&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57180957?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56919193,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Limited offer: Delta Air Lines Flight limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56919193&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56919193?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56919194,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Special deal: United Airlines Flight limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56919194&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56919194?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56565517,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Limited offer: Vacation With Freedom and Flexibility - Free Cancellation Hotels",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56565517&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56565517?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56919195,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Promotion: Shop American Airlines Flight limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56919195&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56919195?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 57389248,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Today only: Kids Stay or Eat Free at Select Hotels",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57389248&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57389248?partner=hawaii",
          "terms": "Terms and Exclusions Apply, See Site for Details",
          "code": ""
        },
        {
          "id": 57179959,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Save on Boston Weekend Getaways",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57179959&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57179959?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56908200,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Weekly limited time deals: Today's Top limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56908200&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56908200?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56603309,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Flight limited time deals Under $199",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56603309&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56603309?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 56524989,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Limited offer: Weekly limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=56524989&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/56524989?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 57389251,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Promotion: Save With Beach Hotel limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57389251&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57389251?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 57389250,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Special deal: Save on Luxury Hotels",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57389250&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57389250?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 57389249,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "deal",
          "text": "Limited offer: Save on Weekend Road Trips Hotel limited time deals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57389249&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57389249?partner=hawaii",
          "terms": "",
          "code": ""
        },
        {
          "id": 58338592,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "coupon",
          "text": "Today only: 30% on Avis Car Rentals",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58338592&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58338592?partner=hawaii",
          "terms": "",
          "code": "S754600"
        },
        {
          "id": 58279512,
          "badge_text": "$150",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Today only: Coupon promo code for $150 Off",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58279512&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58279512?partner=hawaii",
          "terms": "",
          "code": "GETAWAY150"
        },
        {
          "id": 58105387,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "coupon",
          "text": "Promotion: Get $150 on Orbitz Any Order",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58105387&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58105387?partner=hawaii",
          "terms": "",
          "code": "SIGHTSEE150"
        },
        {
          "id": 58088802,
          "badge_text": "$75",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Special deal: Coupon promo code for $75 Off",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58088802&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58088802?partner=hawaii",
          "terms": "",
          "code": "GETAWAY75"
        },
        {
          "id": 58018408,
          "badge_text": "10%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Today only: Coupon promo code for 10% Off Select Hotels",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=58018408&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/58018408?partner=hawaii",
          "terms": "",
          "code": "ROAM"
        },
        {
          "id": 57816802,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "coupon",
          "text": "10% on Hotel Bookings",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57816802&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57816802?partner=hawaii",
          "terms": "",
          "code": "GETAWAY"
        },
        {
          "id": 57801555,
          "badge_text": "18%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Promotion: Get 18% off Sitewide",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57801555&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57801555?partner=hawaii",
          "terms": "",
          "code": "APPONLY18"
        },
        {
          "id": 57777040,
          "badge_text": "ON SALE",
          "badge_text_type": "text",
          "type": "coupon",
          "text": "Today only: Get $75 on Select Flights + Hotel Packages",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57777040&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57777040?partner=hawaii",
          "terms": "",
          "code": "VACATION75"
        },
        {
          "id": 57655941,
          "badge_text": "30%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Get 30% off Your Purchase at Orbitz.com",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57655941&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57655941?partner=hawaii",
          "terms": "",
          "code": "SAVEMORE"
        },
        {
          "id": 57625507,
          "badge_text": "15%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Promotion: Coupon promo code for 15% Off Select Hotels When You Book in the App",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57625507&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57625507?partner=hawaii",
          "terms": "",
          "code": "APP15"
        },
        {
          "id": 57026326,
          "badge_text": "25%",
          "badge_text_type": "number",
          "type": "coupon",
          "text": "Get 25% off",
          "expiration_date": "Valid until further notice",
          "modal_url": "/coupons/orbitz.com?open=57026326&partner=hawaii",
          "deal_url": "https://qa.goodshop.com/deals/57026326?partner=hawaii",
          "terms": "",
          "code": "D419801"
        }
      ]
    } }
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