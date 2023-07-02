const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", function () {
          let fundMe, deployer
          const sendValue = ethers.parseEther("0.03")
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })

          it("Allows people to fund and withdraw", async function () {
              await fundMe.fund({
                  value: sendValue,
              })
              await fundMe.withdraw()
              const endingBalance = await hre.ethers.provider.getBalance(
                  await fundMe.getAddress()
              )
              assert.equal(endingBalance.toString(), "0")
          })
      })
