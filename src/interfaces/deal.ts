export default interface Deal {
  id: number;
  type: string;
  code?: string;
  text: string;
  badge_text: string;
  badge_text_type: string;
  deal_url: string;
  modal_url: string;
  expiration_date: string;
  terms?: string;
}