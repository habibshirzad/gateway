import { Body, Controller, Get, Inject, OnModuleInit, Post } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import SubscribersService from "./subscribers.service.interface";




@Controller('email')
export  class SubscribersController implements OnModuleInit{
    private subscribersService: SubscribersService;
    // constructor - subscriber service
    constructor
    (@Inject('SUBSCRIBERS_PACKAGE') private client: ClientGrpc){}
    onModuleInit() {
        this.subscribersService = this.client.getService<SubscribersService>('SubscribersService')
    }

    // add subcriber controller
    @Post()
    async createPost(@Body() subscriber:any){
        console.log('create email address:', subscriber)
        return this.subscribersService.AddSubscriber(subscriber)
    }

    // getting all subscribers
    @Get()
    async getSubscribers(){
        console.log('get emails', this.subscribersService.GetAllSubscribers)
        return this.subscribersService.GetAllSubscribers({})
    }

}
