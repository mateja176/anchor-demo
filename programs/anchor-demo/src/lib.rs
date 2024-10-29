use anchor_lang::prelude::*;

declare_id!("8GZ7hsXeVMSGrA73cPpktFpqwEY3pzKojYAf5fB2Poqe");

#[program]
pub mod anchor_demo {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
