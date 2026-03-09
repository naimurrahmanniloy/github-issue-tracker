// cards parent element
const issueCards = document.getElementById("issueCards");
// cards count
const cardsCount = document.getElementById("cardsCount");
const openIssues = [];
const closedIssues = [];

//Load all issues card
const loadAllIssuesCard = async () => {
  loading(true);
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  openIssues.length = 0;
  closedIssues.length = 0;
  data.data.forEach((card) => {
    if (card.status === "open") {
      openIssues.push(card);
    } else {
      closedIssues.push(card);
    }
  });
  displayCard(data.data);
  loading(false);
};
