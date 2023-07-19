// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MerkleProofTest is Ownable {

    bytes32 public merkleRoot;

    constructor(bytes32 _merkleRoot) {
        merkleRoot = _merkleRoot;
    }

    function verify(address wallet, bytes32[] calldata _merkleProof) external view returns (bool) {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(wallet))));
        return MerkleProof.verify(_merkleProof, merkleRoot, leaf);
    }

    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }
}