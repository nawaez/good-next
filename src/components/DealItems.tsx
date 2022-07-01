import Deal from '../interfaces/deal';
import style from '../styles/DealItems.module.sass';

export default function DealItems({ deals, setModal }: { deals: Deal[], setModal: (deal: Deal) => void; }) {
  return (
    <div className={style.dealItems}>
      {deals.map((deal) => {
        return (
          <div key={deal.id}>
            <DealItem deal={deal} dealClick={setModal} />
          </div>
        );
      })}
    </div>
  );
}

function DealItem({ deal, dealClick }: { deal: Deal, dealClick: (deal: Deal) => void; }) {
  return (
    <div
      className={style.dealItem}
      onClick={() => dealClick(deal)}
    >
      <div className={style.badge}>
        <div className={style[deal.badge_text_type]}>{deal.badge_text}</div>
        <div className={style[deal.type]}>{deal.type === "deal" ? "sale" : deal.type}</div>
      </div>
      <div className={style.details}>
        <div className={style.code}></div>
        <div className={style.text}>{deal.text}</div>
        <div className={style.bottomContainer}>
          <div className={style.expiryDate}>
            <div className={style.icon}></div>
            <div className={style.text}>{deal.expiration_date}</div>
          </div>
        </div>
      </div>
      <button
        className={style[deal.type]}
        onClick={() => dealClick(deal)}
      >
        {(deal.type === "coupon") ? (<>
          <span className={style.label}>Show Coupon Code</span>
          <span className={style.code}>{deal.code}</span>
        </>) : (
          <span className={style.deal}>Open Deal</span>
        )}
      </button>
    </div>
  );
}