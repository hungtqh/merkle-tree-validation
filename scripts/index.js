// const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");

// // Each allowlist/whitelist will have a list of addresses and a merkle root, we will save these values to the database

// // Save this list to the database
// const values = [
//     ["0x4B741235f451474CEAC5a1F4ADa56523618D9292"],
//     ["0xa7184f8de969Ff5f1cdeee4d514d72E2731b4802"],
//     ["0x8DD2B488791306029Bfbb22450D7F24553cF231d"],
// ];

// const tree = StandardMerkleTree.of(values, ["address"]);

// // Use this to check allowlist/whitelist for a address
// console.log('Verify Proof of a value:', tree.verify(values[1], tree.getProof(values[1])));

// // Save this values to db
// console.log('Merkle Root:', tree.root);

// // console.log('Tree:', tree);

// console.log('Proof of a value:', tree.getProof(values[0]));

// console.log("Leaf hash:", tree.leafHash(values[0]));

// console.log("Tree JSON", JSON.stringify(tree.dump()));

const { MerkleTree } = require('merkletreejs')
const KECCAK256 = require('keccak256')

const leaves = ['0x4B741235f451474CEAC5a1F4ADa56523618D9292', '0xa7184f8de969Ff5f1cdeee4d514d72E2731b4802', '0x8DD2B488791306029Bfbb22450D7F24553cF231d'].map(x => KECCAK256(x))
const tree = new MerkleTree(leaves, KECCAK256, {sortPairs: true})
const root = '0x' + tree.getRoot().toString('hex')
const leaf = KECCAK256('0x4B741235f451474CEAC5a1F4ADa56523618D9292')
const proof = tree.getProof(leaf)

console.log('Merkle root: ', root)
console.log('Proof: ', tree.getHexProof(leaf))
console.log('Verify: ', tree.verify(proof, leaf, root)) // true
