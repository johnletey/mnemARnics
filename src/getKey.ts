import Arweave from "arweave";
import { getKeyFromMnemonic } from "arweave-mnemonic-keys";
import fs from "fs";

const client = new Arweave({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

const getKey = async () => {
  const mnemonic = process.argv[2];
  const keyfile = await getKeyFromMnemonic(mnemonic);
  const address = await client.wallets.getAddress(keyfile);

  fs.writeFileSync(
    `./arweave-keyfile-${address}.json`,
    JSON.stringify(keyfile)
  );

  console.log();
  console.log(`Generated a keyfile based on the inputted mnemonics.`);
  console.log(`  address = ${address}`);
  console.log(`  output  = "./arweave-keyfile-${address}.json"`);
};

getKey();
