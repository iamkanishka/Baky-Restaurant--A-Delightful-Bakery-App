import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { DiscountsModule } from './discounts/discounts.module';

@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [OrdersModule, DiscountsModule],
})
export class AppModule {}
