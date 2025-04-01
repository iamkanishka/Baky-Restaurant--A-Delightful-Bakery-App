import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { DiscountsModule } from './discounts/discounts.module';
import { MenuModule } from './menu/menu.module';
import { GrowthModule } from './growth/growth.module';

@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [OrdersModule, DiscountsModule, MenuModule, GrowthModule],
})
export class AppModule {}
