import CardA from "../components/card";

export default function ProfilePage() {
  let data = {
    name: "Paella Dish",
    image:
      "https://ardo.com/files/attachments/.18687/w1200h630zcCq85_PAELLA_ROYAL_207.jpg",
    body:
      "Paella is a Spanish rice dish originally from Valencia. Paella isone of the best-known dishes in Spanish cuisine. For this reason,many non-Spaniards view it as Spain's national dish, but Spaniards almost unanimously consider it to be a dish from the Valencian region.",
    cal: 431,
    fat: "Fat: 10.4g",
    sod: "Sodium:640mg",
    carbo: "Carbohydrates:35.7g",
    fibre: "Fiber:2.5g",
    prot: "Protien:12.2g"
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url("")`
      }}
    >
      <CardA data={data} />
    </div>
  );
}
