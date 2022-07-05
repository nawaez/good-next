export default function openUrls(newTabUrl: string | undefined = undefined, currentTabUrl: string | undefined = undefined) {
  newTabUrl ? window.open(newTabUrl) : undefined;
  currentTabUrl ? window.open(currentTabUrl, "_self") : undefined;
}