const { Web3 } = require("./web3.min");
var chainId;
var accountAddress;
var erc20Abi = 


async function connect() {
  if(window.ethereum){
      try{
    await window.ethereum.enable();
      } catch(error) {
          console.error("User denied account access");
      }
      web3 = new Web3(window.ethereum);

  }else if(window.web3) {
      web3 = new Web3(window.ethereum);
  } else{
      alert("Please install wallet");
  }

  chainId = await web3.eth.getChainId();
  var blockNumber = await web3.eth.getBlockNumber();
  var block = await web3.eth.getBlock(blockNumber);
  var blockTimestamp = block.timestamp;

  var account = await web3.eth.getAccounts();
  accountAddress = account[0];

  var balance = await web3.eth.getBalance(accountAddress);

  document.getElementById("chain_id").innerText = chainId;
  document.getElementById("block_number").innerText = blockNumber;
  document.getElementById("block_timestamp").innerText = blockTimestamp;
  document.getElementById("account_address").innerText = accountAddress;
  document.getElementById("account_balance").innerText = web3.utils.fromWei(balance)
}

async function read() {
    var contractAddress = documen.getElementById("contract_address").value;
    new web3.eth.Contract(contractAddress,)

}