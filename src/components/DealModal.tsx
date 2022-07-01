import Deal from '../interfaces/deal';
import style from '../styles/DealModal.module.sass';

export type OptionalDeal = Deal | undefined;
export default function DealModal({ deal = undefined, merchant_name }: { deal: OptionalDeal, merchant_name: string; }) {
  if (!deal || !deal.text) { return <></>; }
  return (
    <div className={style.dealModal}>
      <div className={style.container} data-merchant-id={deal.id}>
        {(deal.type === "coupon") ? (
          <div className={style.couponContainer}>
            <div className={style.text}>{deal.text}</div>
            <div className={style.codeContainer}>
              <input className={style.codeInput}></input>
              <div className={style.code}>{deal.code}</div>
              <div className={style.copyButton}>Copy Code</div>
            </div>
            <div className={style.subtitle}>Enter this code online at checkout to save at</div>
            <div className={style.shopAtLink}>{merchant_name}</div>
          </div>
        ) : (
          <div className={style.dealContainer}>
            <div className={style.text}>{deal.text}</div>
            <div className={style.subtitle}>No code needed.</div>
          </div>
        )}
        <div className={style.closeButton}></div>
      </div>
    </div>
  );
}