var s="ethereum-classic";var e=["arbitrum","avalanche","base","bnb","canton","celo","coreum","ethereum",s,"hedera","kusama","optimism","polkadot","polygon","solana","stellar","vechain","viction"],a=["arbitrum","avalanche","base","celo","ethereum",s,"optimism","polygon"],o=[{id:"1konto",name:"1Konto",icon:"/assets/ecosystem/1konto-logo.svg",url:"https://www.1konto.com"},{id:"brale",name:"Brale",icon:"/assets/ecosystem/brale-logo.svg",url:"/product"},{id:"circle",name:"Circle",icon:"/assets/ecosystem/circle-logo.svg",url:"https://www.circle.com/en/usdc"},{id:"coinbase",name:"Coinbase",icon:"/assets/ecosystem/coinbase-logo.svg",url:"https://coinbase.com/"},{id:"curve",name:"Curve",icon:"/assets/ecosystem/curve-logo.svg",url:"https://curve.fi/"},{id:"etcswap",name:"ETCswap",icon:"/assets/ecosystem/etcswap-logo.svg",url:"https://v3.etcswap.org/#/swap?chain=classic&inputCurrency=ETC&outputCurrency=0xDE093684c796204224BC081f937aa059D903c52a&exactAmount=1"},{id:"gemini",name:"Gemini",icon:"/assets/ecosystem/gemini-logo.svg",url:"https://www.gemini.com/dollar"},{id:"paypal",name:"PayPal",icon:"/assets/ecosystem/paypal-logo.svg",url:"https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd"},{id:"paxos",name:"Paxos",icon:"/assets/ecosystem/paxos-logo.svg",url:"https://paxos.com/usdp/"},{id:"uniswap",name:"Uniswap",icon:"/assets/ecosystem/uniswap-logo.svg",url:"https://uniswap.org"}],t=[{id:"usc",name:"Classic USD",ticker:"USC",icon:"/assets/stablecoins/usc-logo.png",desc:"Classic USD is the premiere native stablecoin for the Ethereum Classic ecosystem.",category:"Stablecoin",url:"/stablecoins/USC",borderColor:"hover:border-[#35ff86]",braleIssued:!0},{id:"usdglo",name:"Glo Dollar",ticker:"USDGLO",icon:"/assets/stablecoins/usdglo-logo.svg",desc:"Glo Dollar is a fiat backed stablecoin that generates basic income for people in extreme poverty.",category:"Stablecoin",url:"/stablecoins/USDGLO",borderColor:"hover:border-[#2AE2D9]",braleIssued:!0},{id:"usdp",name:"Pax Dollar",ticker:"USDP",icon:"/assets/stablecoins/usdp-logo.png",desc:"USDP is the world's leading regulated stablecoin, issued by Paxos and fully backed by cash and cash equivalents.",category:"Stablecoin",borderColor:"hover:border-[#1a9033]",url:"/stablecoins/USDP"},{id:"usd*",name:"Perena USD",ticker:"USD*",icon:"/assets/stablecoins/usd*-logo.png",desc:"USD*, launched by Perena, is building infrastructure for money on Solana.",category:"Stablecoin",url:"/stablecoins/USD*",borderColor:"hover:border-[#1f0658]",braleIssued:!0},{id:"mxne",name:"Real MXN",ticker:"MXNe",icon:"/assets/stablecoins/mxne-logo.png",desc:"Real MXN is a stablecoin developed to redefine the interaction between the local Mexican economy and global finance.",category:"Stablecoin",url:"/stablecoins/MXNe",borderColor:"hover:border-[#E4FF40]",braleIssued:!0},{id:"sbc",name:"Stable Coin",ticker:"SBC",icon:"/assets/stablecoins/sbc-logo.svg",desc:"SBC is a digital dollar stablecoin issued by Brale as an example combining CeFi and DeFi.",category:"Stablecoin",url:"/stablecoins/SBC",borderColor:"hover:border-[#6938EF]",braleIssued:!0},{id:"usdc",name:"USD Coin",ticker:"USDC",icon:"/assets/stablecoins/usdc-logo.png",desc:"USDC is a digital dollar backed 100% by highly liquid cash and cash-equivalent assets.",category:"Stablecoin",borderColor:"hover:border-[#205fbf]",url:"/stablecoins/USDC"}],i=[{id:"arbitrum",name:"Arbitrum",icon:"/assets/ecosystem/arbitrum-logo.svg",desc:"Arbitrum is a leading layer 2 scaling solution for Ethereum, enabling applications to scale with 10X lower fees.",category:"Blockchain",url:"https://arbitrum.io/",chainId:"arbitrum"},{id:"avalanche",name:"Avalanche",icon:"/assets/ecosystem/avalanche-logo.svg",desc:"Avalanche is a proof of stake blockchain designed to scale infinitely and finalize transactions in less than one second.",category:"Blockchain",url:"https://www.avax.network",chainId:"avalanche"},{id:"base",name:"Base",icon:"/assets/ecosystem/base-logo.svg",desc:"Base is a low-fee layer 2 scaling solution for Ethereum supported by the Coinbase ecosystem.",category:"Blockchain",url:"https://base.org",chainId:"base"},{id:"bnb",name:"BNB Chain",icon:"/assets/ecosystem/bnb-logo.svg",desc:"BNB Chain is the best blockchain for Web3 dApps with massive user bases. Developers can build easily with tutorials, grants, and ecosystem support.",category:"Blockchain",url:"https://www.bnbchain.org/",chainId:"bnb"},{id:"canton",name:"Canton",icon:"/assets/ecosystem/canton-logo.svg",desc:"Canton Network is the first open blockchain network designed with the control and interoperability needed to power synchronized financial markets.",category:"Blockchain",url:"https://www.canton.network/",chainId:"canton"},{id:"celo",name:"Celo",icon:"/assets/ecosystem/celo-logo.svg",desc:"Celo is a low fee, carbon-negative, and EVM-compatible blockchain optimized for mobile payments.",category:"Blockchain",url:"https://celo.org",chainId:"celo"},{id:"coreum",name:"Coreum",icon:"/assets/ecosystem/coreum-logo.svg",desc:"Coreum is an enterprise-grade blockchain designed to meet the critical scalability, security, and interoperability needs of large enterprises.",category:"Blockchain",url:"https://www.coreum.com/",chainId:"coreum"},{id:"ethereum",name:"Ethereum",icon:"/assets/ecosystem/ethereum-logo.svg",desc:"Ethereum Layer 1 is a decentralized blockchain that executes all on-chain transactions in the Ethereum network.",category:"Blockchain",url:"https://ethereum.org",chainId:"ethereum"},{id:s,name:"Ethereum Classic",icon:"/assets/ecosystem/ethereum-classic-logo.svg",desc:"Ethereum Classic is a decentralized computing platform that runs applications exactly as programmed without downtime, censorship or third party interference.",category:"Blockchain",url:"https://ethereumclassic.org/",chainId:"ethereum-classic"},{id:"hedera",name:"Hedera",icon:"/assets/ecosystem/hedera-logo.svg",desc:"Hedera is a scalable, decentralized public ledger governed by leading enterprises across the world.",category:"Blockchain",url:"https://hedera.com/",chainId:"hedera"},{id:"kusama",name:"Kusama",icon:"/assets/ecosystem/kusama-logo.svg",desc:"Kusama is a scalable network of specialized blockchains built using Substrate and nearly the same codebase as Polkadot.",category:"Blockchain",url:"https://kusama.network/",chainId:"kusama"},{id:"optimism",name:"Optimism",icon:"/assets/ecosystem/optimism-logo.svg",desc:"Optimism is an Ethereum layer 2 blockchain that allows EVM applications to scale with low fees and high transaction speeds.",category:"Blockchain",url:"https://www.optimism.io",chainId:"optimism"},{id:"polkadot",name:"Polkadot",icon:"/assets/ecosystem/polkadot-logo.svg",desc:"Polkadot is a blockchain network of networks designed to challenge our assumptions, directed and governed by those who hold the DOT token.",category:"Blockchain",url:"https://polkadot.com/",chainId:"polkadot"},{id:"polygon",name:"Polygon",icon:"/assets/ecosystem/polygon-logo.svg",desc:"Polygon is a multi-blockchain ecosystem compatible with Ethereum.",category:"Blockchain",url:"https://polygon.technology",chainId:"polygon"},{id:"solana",name:"Solana",icon:"/assets/ecosystem/solana-logo.svg",desc:"Solana is a scalable, low-fee blockchain optimized for payments and consumer applications.",category:"Blockchain",url:"https://solana.com",chainId:"solana"},{id:"stellar",name:"Stellar",icon:"/assets/ecosystem/stellar-logo.svg",desc:"Stellar is a leading blockchain for real-world asset issuance and payments with a global network of on and off ramp providers.",category:"Blockchain",url:"https://stellar.org",chainId:"stellar"},{id:"vechain",name:"VeChain",icon:"/assets/ecosystem/vechain-logo.svg",desc:"VeChain is an EVM-compatible blockchain designed for enterprise solutions, supply chain management, and business processes.",category:"Blockchain",url:"https://vechain.org/",chainId:"vechain"},{id:"viction",name:"Viction",icon:"/assets/ecosystem/viction-logo.svg",desc:"Viction is a people-centric layer-1 blockchain that provides zero-gas transactions and heightened security, making Web3 accessible and safe for everyone.",category:"Blockchain",url:"https://www.viction.xyz/",chainId:"viction"}],n=[{id:"backpack",name:"Backpack",icon:"/assets/ecosystem/backpack-logo.svg",desc:"Backpack is the first wallet built for xNFTs. Use all crypto assets inside Backpack.",category:"Wallet",url:"https://www.backpack.app",chains:["ethereum","solana"],support:!0,recognition:!0},{id:"blade",name:"Blade Wallet",icon:"/assets/ecosystem/blade-wallet-logo.svg",desc:"Blade Wallet is the only third-party audited, regularly security tested, self-custody Web3 wallet on Hedera.",category:"Wallet",url:"https://bladewallet.io/",chains:["ethereum","hedera"],support:!0,recognition:!0},{id:"citizen-wallet",name:"Citizen Wallet",icon:"/assets/ecosystem/citizen-logo.svg",desc:"Citizen Wallet is a mobile and web wallet designed to onboard communities to web3 without signup or gas fees.",category:"Wallet",url:"https://citizenwallet.xyz",chains:["base","optimism","polygon"],support:!0,recognition:!0},{id:"coinbase-wallet",name:"Coinbase Wallet",icon:"/assets/ecosystem/coinbase-wallet-logo.svg",desc:"Coinbase Wallet is an EVM compatible mobile wallet and Dapp browser created by Coinbase.",category:"Wallet",url:"https://www.coinbase.com/wallet",chains:a,support:!0,recognition:!0},{id:"exodus",name:"Exodus",icon:"/assets/ecosystem/exodus-logo.svg",desc:"Exodus is a mobile crypto wallet supporting thousands of assets on 50+ networks.",category:"Wallet",url:"https://www.exodus.com/",chains:e,support:!0,recognition:!1},{id:"freighter",name:"Freighter",icon:"/assets/ecosystem/freighter-logo.svg",desc:"Freighter is a non custodial web wallet that enables you to sign Stellar transactions in your browser.",category:"Wallet",url:"https://www.freighter.app",chains:["stellar"],support:!0,recognition:!0},{id:"hashpack",name:"HashPack",icon:"/assets/ecosystem/hashpack-logo.svg",desc:"HashPack is your gateway to Hedera dApps, DeFi, and NFTs.",category:"Wallet",url:"https://www.hashpack.app/",chains:["hedera"],support:!0,recognition:!0},{id:"glow",name:"Glow",icon:"/assets/ecosystem/glow-logo.svg",desc:"Glow is a Solana wallet with zero fee swaps, in-app staking, NFT explorer, and more.",category:"Wallet",url:"https://glow.app",chains:["solana"],support:!0,recognition:!0},{id:"ledger",name:"Ledger",icon:"/assets/ecosystem/ledger-logo.svg",desc:"Ledger is an industry leading hardware wallet used by more than 6 million users.",category:"Wallet",url:"https://www.ledger.com/",chains:e,support:!0,recognition:!1},{id:"lobstr",name:"Lobstr",icon:"/assets/ecosystem/lobstr-logo.svg",desc:"Lobstr is a simple Stellar wallet available on web, iOS, and Android.",category:"Wallet",url:"https://lobstr.co",chains:["stellar"],support:!0,recognition:!1},{id:"metamask",name:"MetaMask",icon:"/assets/ecosystem/metamask-logo.svg",desc:"Metamask is an EVM compatible web and mobile wallet for managing digital assets.",category:"Wallet",url:"https://metamask.io",chains:a,support:!0,recognition:!1},{id:"mpcvault",name:"MPCVault",icon:"/assets/ecosystem/mpcvault-logo.svg",desc:"MPCVault is an MPC-Multisig wallet for teams. Custody stablecoins and digital assets with multi-chain support and flexible transaction policies.",category:"Wallet",url:"https://mpcvault.com",chains:["arbitrum","avalanche","base","ethereum","optimism","polygon"],support:!0,recognition:!1},{id:"phantom",name:"Phantom",icon:"/assets/ecosystem/phantom-logo.svg",desc:"Phantom is a digital wallet designed to manage DeFi and NFTs on Ethereum, Polygon, and Solana.",category:"Wallet",url:"https://phantom.app",chains:["ethereum","polygon","solana"],support:!0,recognition:!0},{id:"rainbow",name:"Rainbow",icon:"/assets/ecosystem/rainbow-logo.svg",desc:"Rainbow is a fun, simple, and secure Ethereum mobile wallet.",category:"Wallet",url:"https://rainbow.me",chains:["base","ethereum","optimism","polygon"],support:!0,recognition:!0},{id:"solar",name:"Solar",icon:"/assets/ecosystem/solar-logo.svg",desc:"A mobile and desktop Stellar wallet with DEX and multisig support.",category:"Wallet",url:"https://solarwallet.io",chains:["stellar"],support:!0,recognition:!1},{id:"solflare",name:"Solflare",icon:"/assets/ecosystem/solflare-logo.svg",desc:"Solflare is the safest way to explore Solana. Buy, store, swap tokens & NFTs and access Solana DeFi.",category:"Wallet",url:"https://solflare.com",chains:["solana"],support:!0,recognition:!1},{id:"trust-wallet",name:"Trust Wallet",icon:"/assets/ecosystem/trust-logo.svg",desc:"Trust Wallet is a multi-chain, self-custody wallet with 60M+ users.",category:"Wallet",url:"https://trustwallet.com/",chains:e,support:!0,recognition:!1},{id:"xbull",name:"xBull",icon:"/assets/ecosystem/xbull-logo.svg",desc:"xBull is a wallet designed as as a bridge between websites/users and the Stellar blockchain.",category:"Wallet",url:"https://xbull.app",chains:["stellar"],support:!0,recognition:!1}],l=[{id:"brale",name:"Brale",icon:"/assets/ecosystem/brale-logo.svg",desc:"Brale is a stablecoin issuance, custodian, and exchange platform allowing businesses to swap stablecoins at par.",category:"Exchange",url:"/product"},{id:"1konto",name:"1Konto",icon:"/assets/ecosystem/1konto-logo.svg",desc:"1Konto provides a secure, reliable, and seamless solution to access, trade and settle digital and fiat currencies at the best price.",category:"Exchange",url:"https://www.1konto.com"},{id:"1inch",name:"1inch",icon:"/assets/ecosystem/1inch-logo.svg",desc:"1inch is a DEX aggregator that sources prices from dozens of on-chain sources.",category:"Exchange",url:"https://1inch.io/"},{id:"jumper",name:"Jumper",icon:"/assets/ecosystem/jumper-logo.svg",desc:"Jumper is a multi-chain liquidity aggregator that makes it easy to swap between stablecoins on different EVM chains.",category:"Exchange",url:"https://jumper.exchange/"},{id:"matcha",name:"Matcha",icon:"/assets/ecosystem/matcha-logo.svg",desc:"Matcha is a decentralized exchange aggregator powered by the 0x protocol.",category:"Exchange",url:"https://matcha.xyz/"},{id:"uniswap",name:"Uniswap",icon:"/assets/ecosystem/uniswap-logo.svg",desc:"Uniswap is the largest DEX on the Ethereum blockchain and allows users to trade crypto without intermediaries.",category:"Exchange",url:"https://uniswap.org"}],c=[{id:"afterdark",name:"AfterDark",icon:"/assets/ecosystem/afterdark-logo.svg",desc:"AfterDark conducts smart contract audits that shine a light on the darkest corners of Web3. AfterDark accepts audit invoice payments in Glo Dollars.",category:"Payments",url:"https://afterdarklabs.xyz/"},{id:"coinflow",name:"Coinflow",icon:"/assets/ecosystem/coinflow-logo.svg",desc:"Coinflow allows businesses to accept traditional payments such as cards and settle in Brale stablecoins for goods and services. Coinflow also enables stablecoin instant payouts via ACH, Push-to-card, RTP, and SEPA.",category:"Payments",url:"https://coinflow.cash/"},{id:"rain-cards",name:"Rain Cards",icon:"/assets/ecosystem/rain-logo.svg",desc:"Rain Cards enables web3 companies to spend stablecoins with merchants through debit cards and bill pay.",category:"Payments",url:"https://www.raincards.xyz/"},{id:"skyline-digital",name:"Skyline Digital",icon:"/assets/ecosystem/skyline-digital-logo.svg",desc:"Skyline Digital supports stablecoin to fiat payments in USD, EUR, CHF, SGD and GBP.",category:"Payments",url:"https://www.skylinedigital.xyz/"}],r=[{id:"keyrock",name:"Keyrock",icon:"/assets/ecosystem/keyrock-logo.svg",desc:"Keyrock are cryptocurrency market makers building scalable algorithmic technologies to support efficient digital asset markets.",category:"Liquidity",url:"https://keyrock.com/"}],d=[{id:"bitgo",name:"BitGo",icon:"/assets/ecosystem/bitgo-logo.svg",desc:"Bitgo is a qualified custodian of digital assets with over 1,500 institutional clients in 50 countries.",category:"Custody",url:"https://www.bitgo.com/"}],g=[{id:"euler",name:"Euler",icon:"/assets/ecosystem/euler-logo.svg",desc:"Euler is a modular lending platform on Ethereum that enables users to lend, borrow and build without limits.",category:"Lending",url:"https://www.euler.finance/"},{id:"credit-coop",name:"Credit Coop",icon:"/assets/ecosystem/credit-coop-logo.png",desc:"Credit Coop allows businesses to access credit on-chain with instant liquidity.",category:"Lending",url:"https://www.creditcoop.xyz/"}],m=[{id:"alchemy",name:"Alchemy",icon:"/assets/ecosystem/alchemy-logo.svg",desc:"Alchemy Rollups is a one-stop shop that provides everything developers need to launch enterprise-grade rollups and grow an ecosystem.",category:"RaaS",url:"https://www.alchemy.com/rollups"}];export{e as a,o as b,t as c,i as d,n as e,l as f,c as g,r as h,d as i,g as j,m as k};
//# sourceMappingURL=/build/_shared/chunk-CUPSJWVW.js.map