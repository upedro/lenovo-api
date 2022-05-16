import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteboksModule } from './noteboks/noteboks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NoteboksModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      `mongodb+srv://pedroteste:xckx0cHWt4KLGSng@cluster0.vnpzu.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-qehhzi-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
