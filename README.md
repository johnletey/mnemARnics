<p align="center">
  <h3 align="center"><code>mnemARnics</code></h3>
  <p align="center">Easily generate Arweave keys with mnemonics.</p>
</p>

## Usage

1. Clone the repo.
2. To install the dependencies, execute `yarn`.

### Generate a new key

To generate a new key, simply run `yarn generate`.

This will print out the mnemonics corresponding to your newly generated key, as well as output both the mnemonics and keyfile itself to the `./keys/<ADDRESS>` folder.

### Retrieve a key using mnemonics

To retrieve a key previously generated, simply run `yarn getKey "<MNEMONICS>"`. Note that the double quotes around the mnemonics are crucial.

This will save your keyfile to `./arweave-keyfile-<ADDRESS>.json`.
