const ERC20Ext = artifacts.require("ERC20Ext");
let instance;
let account;
let amount;
contract("ERC20Ext", accounts => {
    it("mint token", async () => {
        instance = await ERC20Ext.new();

        let feeRatio = 100;
        let burnRatio = 50;
        let feeAddress = accounts[2];
        await instance.set(feeRatio, burnRatio, feeAddress);

        account = accounts[0];
        amount = 10000000000000;
        await instance.mint(account, amount);
        const account_one_balance = await instance.balanceOf.call(account);
        assert.equal(account_one_balance.toNumber(), amount);

    })

    it("burn token", async () => {

        let burnAmount = 10000000000000;
        await instance.burn(burnAmount);
        const account_one_balance_burn = await instance.balanceOf.call(account);
        assert.equal(account_one_balance_burn.toNumber(), amount-burnAmount);

    })


})

