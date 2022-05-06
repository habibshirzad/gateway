import { Body, Controller, Get, Inject, OnModuleInit, Param, Post } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import ProductService from "./product.service.interface";


@Controller('product')
export class ProductController implements OnModuleInit{
    private productService: ProductService;

    constructor
    (@Inject('PRODUCT_PACKAGE') private client: ClientGrpc){}
    onModuleInit() {
        this.productService = this.client.getService<ProductService>('ProductService')
    }

    @Post()
    async createPost(@Body() product: any){
        console.log('create product:',product)
        const newProduct = await this.productService.AddProduct(product)
        return newProduct
    }

    @Get()
    async getProduct(){
        console.log('get product', this.productService)
        return await this.productService.GetAllProducts({data:'asfsaf'})
    }

}
