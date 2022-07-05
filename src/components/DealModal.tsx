import Deal from '../interfaces/deal';
import style from '../styles/DealModal.module.sass';
import { useRef, useState } from 'react';
import openUrls from '../lib/openUrls';

export type OptionalDeal = Deal | undefined;

export default function DealModal({ deal, merchant_name }: { deal: OptionalDeal, merchant_name: string; }) {
  const [showModal, setShowModal] = useState(true);
  const bindCloseButtonClick = () => setShowModal(false);
  const bindBackgroundClick = (e: React.MouseEvent<HTMLInputElement>) => (e.target === e.currentTarget) && setShowModal(false);;
  const copyRef = useRef<HTMLInputElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const bindCopyClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (copyRef.current) {
      copyRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
    }
  };

  if (!showModal || !deal || !deal.text) { return <></>; }
  return (
    <div onClick={bindBackgroundClick} className={style.dealModal}>
      <div className={style.container} data-merchant-id={deal.id}>
        {(deal.type === "coupon") ? (
          <div className={style.couponContainer}>
            <div className={style.text}>{deal.text}</div>
            <div className={style.codeContainer}>
              <input ref={copyRef} className={style.codeInput} value={deal.code} readOnly></input>
              <div className={style.code}>{deal.code}</div>
              <div onClick={bindCopyClick} className={style.copyButton}>
                {isCopied ? "Copied!" : "Copy Code"}
              </div>
            </div>
            <div className={style.subtitle}>
              {isCopied ? "Code copied! Now enter this code at checkout to save." : "Enter this code online at checkout to save at"}
            </div>
            <div onClick={() => openUrls(deal.deal_url)} className={style.shopAtLink}>{merchant_name}</div>
          </div>
        ) : (
          <div className={style.dealContainer}>
            <div className={style.text}>{deal.text}</div>
            <div className={style.subtitle}>No code needed.</div>
            <div onClick={() => openUrls(deal.deal_url)} className={style.shopAtLink}>Shop at {merchant_name}</div>
          </div>
        )}
        <div onClick={bindCloseButtonClick} className={style.closeButton}></div>
      </div>
    </div>
  );
}

