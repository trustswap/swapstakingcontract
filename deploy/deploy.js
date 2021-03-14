const { ethers, upgrades } = require("hardhat");

async function main() {
  const SwapStakingContract = await ethers.getContractFactory(
    "SwapStakingContract"
  );
  // address _token, address _rewardsAddress, uint256 _maxStakingAmount, uint256 _unstakingPeriod)

  const swapStakingContract = await upgrades.deployProxy(SwapStakingContract, [
    "0x6b175474e89094c44da98b954eedeac495271d0f",
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    2000,
    1000
  ], { unsafeAllowCustomTypes: true });
  await swapStakingContract.deployed()
  // const swapDeployed = await SwapStakingContract.deploy();
  console.log("SwapStakingContract deployed to:", swapStakingContract.address);
}

main();
