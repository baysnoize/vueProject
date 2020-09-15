import { ApiCaller } from "@tokend/js-sdk";
import { WalletsManager } from "@tokend/js-sdk";

export default class TokenD {
  WalletManager = async () => {
    const apiCaller = await ApiCaller.getInstanceWithPassphrase(
      "http://localhost:8060/"
    );
    const WManager = new WalletsManager(apiCaller);
    return WManager;
  };
}

CreateWallet = async (email, password) => {
  const apiCaller = await this.WManager()
};
