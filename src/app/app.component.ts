import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  allItems:MenuItem[] = [
    {
      name: "California Burrito",
      category: "Burrito",
      price: 15.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodista.com%2Fsites%2Fdefault%2Ffiles%2FSpicy-Mexican-Rice-Tequila-Lime-Chicken-9.jpg&f=1&nofb=1&ipt=2a3375260ebd64b45e3493c2f54bcaa1adb85fce9f7669e8e68b682539813a41&ipo=images"
    },
    {
      name: "Carne Asada Burritos",
      category: "Burrito",
      price: 15.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YW4m1qd-zq_Ly84zs0N0MQHaFj%26pid%3DApi&f=1&ipt=7a9154e7daa9eccb939bc649044897ef9e7ce36a9282c40b4d6af406b29ec6bf&ipo=images"
    },
    {
      name: "Cowboy Burrito",
      category: "Burrito",
      price: 15.49,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodista.com%2Fsites%2Fdefault%2Ffiles%2Fbeef%2520burrito550.jpg&f=1&nofb=1&ipt=c241f9e6857459d29343f82008cb13698af5386accf1777ce397971f6cdf4dee&ipo=images"
    },
    {
      name: "Street Fish Tacos",
      category: "Taco",
      price: 16.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F4059%2F4580363414_7ba82d5103_b.jpg&f=1&nofb=1&ipt=3bb042ac6fec386f5526e5330e7e1198f5a8676acd279a72efeaf62d5f73d374&ipo=images"
    },
    {
      name: "Street Steak Tacos",
      category: "Taco",
      price: 16.49,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3V5_vZKBSBhOhx460g11sAHaLI%26pid%3DApi&f=1&ipt=e0bfd32d88f393d5dbceb3c345ac6de1816f901247ca784854eb02d28d4452df&ipo=images"
    },
    {
      name: "Veggie Tacos",
      category: "Taco",
      price: 15.49,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_BJE_FQrvcko%2FTTZR-TyYPhI%2FAAAAAAAABD8%2Fh9_SWZGH0Ac%2Fs400%2FIMG_8194.JPG&f=1&nofb=1&ipt=70bb10302db264a690b4251a7fbbdc64909fe36a9bbb62ed39126c8c36aa61f0&ipo=images"
    },
    {
      name: "Original Burger",
      category: "Burger",
      price: 11.79,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fveggiepeople.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ftext_wide%2Fpublic%2Fstory-attach%2Fvegan-black-bean-burger-with-beets-and-quinoa11.jpg%3Fitok%3DSgAomnDM&f=1&nofb=1&ipt=47194c595c9899c8e37db20284d58e56adf766c1017e9f57def927f1d55df192&ipo=images"
    },
    {
      name: "Loaded Sliders",
      category: "Burger",
      price: 4.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zh6Fj5CY6NoamCgIbk1GTgHaE3%26pid%3DApi&f=1&ipt=c09e6b5fd4f3ba134812a8c9ee9b7012024885c7dae8ee9ec767749009cc988e&ipo=images"
    },
    {
      name: "Margarita",
      category: "Drink",
      price: 9.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.H6m0atIL2mBuPASoF50YogHaE7%26pid%3DApi&f=1&ipt=4f26640447e59e8ca2aa1c7d4db06641383513002f76a43b463dad4cb0034a16&ipo=images"
    },
    {
      name: "Cerveza",
      category: "Drink",
      price: 4.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.travelfacts.com%2Fwp-content%2Fuploads%2F2014%2F02%2F4766321210_835aca8a75_b-750x500.jpg&f=1&nofb=1&ipt=9351486cabf70d4213047062bb5519901bdb7fcc0d3e52527058f99369832221&ipo=images"
    },
    {
      name: "Lemonade",
      category: "Drink",
      price: 2.99,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tastefullyeclectic.com%2Fwp-content%2Fuploads%2F2017%2F03%2FLemonade-Beermosa-e1491054753591.jpg&f=1&nofb=1&ipt=0fe07712c57ab51e59446c7f1d1c13e7e86532f3f5b0f6ef42b0178f01e28404&ipo=images"
    },
  ];

  getByCategory(category:string):MenuItem[]  
  {
    return this.allItems.filter(item => item.category===category);
  };

}
