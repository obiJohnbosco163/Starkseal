import { Outlet } from "react-router-dom";
import Navbar from "./nav";
import Footer from "./footer";
import { Contract, RpcProvider } from "starknet";
import { ABI } from "../../assets/ABI";
import { connect } from "get-starknet";
//start
export default function Layout() {
  const CONTRACT_ADDRESS =
    "0x03e915de50fe62d90305e41fa31d7eff8c005244311c1253dae9d74af88df1e1";
  const PROVIDER = new RpcProvider({
    nodeUrl: "https://starknet-sepolia.public.blastapi.io/rpc/v0_8",
  });
  const get_balance = async () => {
    const wallet = await connect();
    await wallet.enable();
    const currentAccount = wallet.account;
    const contract = new Contract(ABI, CONTRACT_ADDRESS, currentAccount);
    console.log(contract);
  };
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <Navbar get_balance={get_balance} />
      {<Outlet />}
      <Footer />
    </div>
  );
}
