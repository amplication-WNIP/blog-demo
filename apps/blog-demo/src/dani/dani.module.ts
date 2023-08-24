import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DaniModuleBase } from "./base/dani.module.base";
import { DaniService } from "./dani.service";
import { DaniController } from "./dani.controller";
import { DaniResolver } from "./dani.resolver";

@Module({
  imports: [DaniModuleBase, forwardRef(() => AuthModule)],
  controllers: [DaniController],
  providers: [DaniService, DaniResolver],
  exports: [DaniService],
})
export class DaniModule {}
