import Arweave from "arweave";
import { generateMnemonic, getKeyFromMnemonic } from "arweave-mnemonic-keys";
import fs from "fs";

const client = new Arweave({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

const generate = async () => {
  const mnemonic = await generateMnemonic();
  const keyfile = await getKeyFromMnemonic(mnemonic);
  const address = await client.wallets.getAddress(keyfile);

  try {
    fs.mkdirSync(`./keys`);
  } catch {
    // directory already exists.
  }
  fs.mkdirSync(`./keys/${address}`);
  fs.writeFileSync(`./keys/${address}/mnemonic`, mnemonic);
  fs.writeFileSync(`./keys/${address}/keyfile.json`, JSON.stringify(keyfile));

  console.log();
  console.log(`Generated keyfile.`);
  console.log(`  address  = ${address}`);
  console.log(`  mnemonic = ${mnemonic}`);
};

generate();
