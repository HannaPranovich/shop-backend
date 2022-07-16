--drop table products;

create table products (
	id uuid not null default uuid_generate_v4() primary key,
	title text not null,
	descriprion text,
	price integer
);

create extension if not exists "uuid-ossp";

--drop table stocks;

create table stocks (
	id uuid not null default uuid_generate_v4() primary key,
	product_id uuid,
	count integer,
	foreign key ("product_id") references "products" ("id")
);

insert  into products (title, descriprion, price) values
('Glass Beaded Tree Topper', 'Add glamour and sophistication to your tree this festive season with the Glass Beaded Tree Topper. This elegant snowflake design lends itself beautifully to any Christmas tree - traditional or contemporary - and looks especially magical when your tree lights are switched on. The warm glow is refracted by the ornaments rhinestone and glass adornments for a dazzling effect.', 6.99),
('Pink Skinny Tinsel', 'Add a cute and dazzling touch to your Christmas crafts with this Pink Skinny Tinsel. Three metres long, this tinsel can be cut to size and then glued or wrapped around decorations, greetings cards, gifts and more.', 1.00),
('Blush Pink Tree Topper Star - Blush', 'This shimmering tree topper star is the perfect way to top off your tree. Simply push onto the top of the branch or your real or artificial Christmas tree. The star measures 19cm x 19cm x 4.2cm Approx. and is suitable for real or artificial trees. The plastic glitter finished topper can be reused year after year and enjoyed by all the family.', 5.69),
('Smoked Oval Bauble', 'Embrace the holiday spirit this Christmas and make sure your tree stands out with this fabulous Smoked Oval Bauble. Offering your tree a sophisticated touch of seasonal festivity, this bauble features a delicate grey smoked effect complete with snowflake decorations and subtle yet stylish jewelled embellishments.', 1.29),
('Red Beaded Bauble','Take your Christmas tree decorations to the next level with this stunning Red Beaded Bauble. The bauble is decorated in a variety of bright red shades that will look stunning on your tree. The shiny beads will come to life in the evening, reflecting your tree lights to cast a lovely warm glow. The 10cm bauble is perfect for larger trees or as a stand out decoration on smaller trees.', 1.29),
('Rose Gold Starburst', 'Take your Christmas tree decorations to the next level with this stunning Red Beaded Bauble. The bauble is decorated in a variety of bright red shades that will look stunning on your tree. The shiny beads will come to life in the evening, reflecting your tree lights to cast a lovely warm glow. The 10cm bauble is perfect for larger trees or as a stand out decoration on smaller trees.', 1.29),
('White Beaded Jewel Top Bauble','A beautiful ornament to add to your Christmas tree, this White Beaded Jewel top Bauble fills your design with festive spirit. Made with a white, beaded outer coating, this bauble gives off a snowy feel once added to your tree. Great for any type of tree, it is easily hung on any branch with help from its loop on top.', 1.29),
('Snowflake And Berries Heart LED Bauble', 'A beautiful ornament to add to your tree, this Snowflake And Berries Heart LED Bauble fills your design with Christmas spirit. A great way to brighten up your design, this bauble features sparkling LEDs and snowflakes to give off that white Christmas feel. Extremely easy to hang, this decoration is sure to be your new favourite.', 4.29),
('Blush Pink Ridged Bauble','Classic in design but modern in colour, this Blush Pink Ridged Bauble is a fun and festive addition to your Christmas Tree. The ridges are accented with chunky pink glitter for a sparkly effect on the tree, catching the glow of the fairy lights for instant magic. Perfect for matching contemporary festive decorations, this stylish bauble is a beautiful twist to the traditional tree hanging.', 1.69);


insert into stocks (product_id, count) values
('5a44c33f-0828-4fc5-9536-3e57145cc0e9', 20),
('60f5c6e5-4f0d-4ef5-a663-784292121b76', 7),
('6309d755-862f-4733-befe-752d571e3023', 2),
('5344a08b-58b6-4472-84c0-18af148c584e', 10),
('f51a658a-3942-4f1f-a93a-b6d919c79112', 7),
('46f4d0e8-705b-4e28-83e4-8b4072e1360a', 10),
('74afbaa0-ef17-4031-a40f-326399eb809b', 4),
('ab11a8d0-a109-43b4-8c19-5adbba9169d3', 5),
('ed56350a-c21d-407b-8865-73afc75df46f', 4)



