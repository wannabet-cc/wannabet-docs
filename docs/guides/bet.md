# Bet

## P2P Betting

- Users can initialize bets by invoking the `createBet` contract function, or using the form on wannabet.cc/create. Users set key bet details here, including:
  - the topic of the bet and how the bet should resolve in a bet message
  - who they want to bet with (i.e. the participant)
  - the number of seconds (number of days on the web app) the participant has to respond before the bet offer expires.
  - how much they want to bet, and with what erc-20 token (any erc-20 is supported by the smart contract, but currently only USDC, Wrapped ETH, rocketpool ETH, and JFF are supported on the web app)
  - the source of truth / judge (the source of truth can be any ethereum address or smart contract, allowing for programmable oracles, trusted public judges, or your friend if the bet is local)
- When creating a bet, a user must approve and send the bet amount to the bet contract.
- Bet participants can accept a bet by invoking the `acceptBet` contract function, or using one of the actions on the specified bet page at wannabet.cc/b/\<bet_id\> (the bet can also be declined by the participant with the `declineBet` function or a bet action).
- If the participant fails to accept the bet within the time period, the bet expires and the bettor can invoke the `retrieveFunds` contract function to resolve the bet. The bet amount is refunded to the bettor.
- Once a bet is accepted, the bet is locked in and the bet amount is transferred from the bettor to the smart contract escrow contract.
- The judge can now invoke the `settleBet` contract function to resolve the bet. The entire sum of the winnings goes to the winning party. The judge can also optionally specify a tie, which refunds the bet amount to both parties.

The wannabet contracts are able to be interacted with on base scan, but the current best way to wannabet is at our home site, wannabet.cc.
