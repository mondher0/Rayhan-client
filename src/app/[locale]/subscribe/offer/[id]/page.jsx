import Subscribe from "../../[id]/Subscribe";

const SubscribePage = async ({ params }) => {
  const { id } = params;

  return <Subscribe offerId={id} />;
};

export default SubscribePage;
