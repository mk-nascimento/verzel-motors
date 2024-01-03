import DisconnectedContainer from "src/components/Container/DisconnectedMainContainer";
import Navbar from "src/components/Navbar";

export default function Session() {
  return (
    <>
      <Navbar signin />
      <DisconnectedContainer />
    </>
  );
}
