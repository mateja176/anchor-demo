import {} from '@jup-ag/instruction-parser';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
  ComputeBudgetProgram,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';

const computeUnitLimitInstruction = ComputeBudgetProgram.setComputeUnitLimit({
  units: 1_400_000,
});
console.log('computeUnits', computeUnitLimitInstruction.data);

const computeUnitPriceInstruction = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: 200_000,
});
console.log('computeUnitPrice', computeUnitPriceInstruction.data);

const associateTokenInstruction = new TransactionInstruction({
  data: Buffer.from([1]),
  keys: [],
  programId: ASSOCIATED_TOKEN_PROGRAM_ID,
});
console.log('associateTokenInstruction', associateTokenInstruction.data);

const transferInstruction = SystemProgram.transfer({
  fromPubkey: new PublicKey('rt6DgH9WoBHRfGaqXpfK4LnYb3TQWcaqgwAtCP7Zauj'),
  lamports: 50_000_000,
  toPubkey: new PublicKey('23iko7dehYrjDTpjVY6hvF6137hZSSfjdzokydXVCzHs'),
});
console.log('transferInstruction', transferInstruction.data);

const tokenProgramInstruction = new TransactionInstruction({
  data: Buffer.from([17]),
  keys: [],
  programId: TOKEN_PROGRAM_ID,
});
console.log('tokenProgramInstruction', tokenProgramInstruction.data);
