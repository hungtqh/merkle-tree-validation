const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");

const values = [
    ["0x4B741235f451474CEAC5a1F4ADa56523618D9292"],
    ["0xbE3Af7D88C85240ba3A7a7d4DCCFB62F61eb3D85"],
    ["0x375ce612097AE25471B792bb7819Dc07BaEcc0fe"],
    ["0xAA4c05ca1716E445B1a345Af36e9c5440FB347c1"],
    ["0xaDDb94a86D3BE33cffb86dCB90cc2828bb644cf5"],
];

const tree = StandardMerkleTree.of(values, ["address"]);

console.log('Tree:', tree);

console.log('Proof of a value:', tree.getProof(values[1]));

console.log('Verify Proof of a value:', tree.verify(values[1], tree.getProof(values[1])));

console.log('Merkle Root:', tree.root);

console.log("Leaf hash:", tree.leafHash(values[1]));