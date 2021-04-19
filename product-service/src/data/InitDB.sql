create extension if not exists "uuid-ossp";

CREATE TABLE if not exists public.products (
	id uuid DEFAULT uuid_generate_v4(),
	title text  NOT NULL,
    description text ,
    price integer NOT NULL,
    "imgUrl" text ,
    ram integer,
    storage text ,
    display text ,
    CONSTRAINT products_pkey PRIMARY KEY (id)
);

CREATE TABLE if not exists public.stocks (
	product_id uuid NOT NULL,
    count int4 NOT NULL,
	CONSTRAINT stocks_pkey PRIMARY KEY (product_id),
    CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO public.products(
	id, title, description, price, "imgUrl", ram, storage, display)
	VALUES (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
        'HP ENVY x360',
        'HP ENVY x360 13-ay0008ca FHD convertible laptop - AMD Ryzen™ 5',
        1049.99,
        'https://store.hp.com/CanadaStore/Html/Merch/Images/c06562022_209x189.jpg',
        8,
        '256 GB SSD storage',
        '33.8 cm (13.3") diagonal FHD display'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a2',
        'HP ProBook 450 G7',
        'HP ProBook 450 G7 15.6” HD Notebook with Windows 10 Pro',
        1029,
        'https://store.hp.com/CanadaStore/Html/Merch/Images/c06455780_209x189.jpg',
        4,
        '500 GB 7200 rpm SATA HDD',
        '39.6 cm (15.6") diagonal HD display'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
        'OMEN 15 Laptop',
        'OMEN by HP 15-dh1010ca Gaming laptop - NVIDIA® GeForce RTX 2080 SUPER',
        1629,
        'https://store.hp.com/CanadaStore/Html/Merch/Images/12B83UA-ABL_3_209x189.jpg',
        16,
        '512 GB PCIe® NVMe™ M.2 SSD',
        '39.6 cm (15.6") diagonal Full HD display'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a4',
        'HP ENVY 15-ep0010ca',
        'HP ENVY 15-ep0010ca 4K touchscreen laptop',
        2000,
        'https://store.hp.com/CanadaStore/Html/Merch/Images/c06586757_209x189.jpg',
        16,
        '1 TB PCIe® NVMe™ M.2 SSD',
        '15.6" diagonal 4K UHD touch display'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a5',
        'MacBook Pro 13 M1',
        'Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage',
        1499,
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000',
        8,
        '512GB SSD storage',
        '13-inch Retina display with True Tone'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a6',
        'MacBook Pro 13 M1',
        'Apple M1 Chip with 8-Core CPU and 8-Core GPU 256GB Storage',
        1299,
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000',
        8,
        '256GB SSD storage',
        '13-inch Retina display with True Tone'
    ),
    (
        '7567ec4b-b10c-48c5-9345-fc73c48a80a7',
        'MacBook Pro 16',
        '2.6GHz 6-Core Processor 512GB Storage AMD Radeon Pro 5300M',
        2399,
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1572825197207',
        16,
        '512GB SSD storage',
        '16-inch Retina display with True Tone'
    );

insert into stocks (product_id, count) select id, trunc(10 + random()*25) from products;
