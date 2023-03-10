--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.category ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: delivery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery (
    id integer NOT NULL,
    is_delivered boolean,
    employee integer,
    invoice integer,
    date date
);


ALTER TABLE public.delivery OWNER TO postgres;

--
-- Name: delivery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.delivery ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    "user" integer,
    role character varying
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.employee ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.employee_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice (
    id integer NOT NULL,
    invoice_user integer,
    delivery_commission numeric,
    total numeric,
    date date
);


ALTER TABLE public.invoice OWNER TO postgres;

--
-- Name: invoice_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice_detail (
    id integer NOT NULL,
    invoice integer,
    product integer,
    quantity integer
);


ALTER TABLE public.invoice_detail OWNER TO postgres;

--
-- Name: invoice_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.invoice_detail ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.invoice_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: invoice_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.invoice ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.invoice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying,
    stock integer,
    unit_price numeric,
    unit_measure character varying,
    category integer,
    total_purchases integer,
    date_expiration date,
    image_url character varying
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.product ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    email character varying,
    address character varying,
    city character varying,
    image_url character varying,
    password character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name) FROM stdin;
1	vegetales
2	carnes
3	bebidas
4	frutas
5	enlatados
6	caramelos
7	l??cteos
8	especias
9	embutidos
10	salsas
11	panes
12	cereales
13	granos
14	harinas
15	otros
16	galletas
17	aceites
18	azucares
\.


--
-- Data for Name: delivery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery (id, is_delivered, employee, invoice, date) FROM stdin;
5	f	\N	20	2023-03-12
6	f	\N	21	2023-03-12
7	f	\N	23	2023-03-13
8	f	\N	24	2023-03-13
9	f	\N	25	2023-03-13
10	f	\N	26	2023-03-13
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (id, "user", role) FROM stdin;
1	1	administrador
\.


--
-- Data for Name: invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice (id, invoice_user, delivery_commission, total, date) FROM stdin;
20	1	1.5	9.3	2023-03-12
21	1	1.5	4.949999999999999	2023-03-12
23	1	1.5	4.85	2023-03-13
24	1	1.5	2	2023-03-13
25	1	1.5	2.65	2023-03-13
26	1	1.5	3	2023-03-13
\.


--
-- Data for Name: invoice_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice_detail (id, invoice, product, quantity) FROM stdin;
27	20	11	10
28	20	1	1
29	20	2	1
30	20	13	1
31	20	6	1
32	21	13	3
33	23	9	1
34	23	1	1
35	24	12	1
36	25	13	1
37	26	14	1
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, name, stock, unit_price, unit_measure, category, total_purchases, date_expiration, image_url) FROM stdin;
8	sal 1kg	142	1.15	unidad	8	32	2023-06-12	https://elahorro.com.ec/web/image/product.template/88998/image
2	arroz carmita	135	0.4	libra	13	7	2023-12-25	https://static.wixstatic.com/media/857708_8952ec2aeb264e7b8aa0c36a7cff3753~mv2_d_6000_6000_s_4_2.png/v1/crop/x_1545,y_780,w_2910,h_4065/fill/w_172,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/857708_8952ec2aeb264e7b8aa0c36a7cff3753~mv2_d_6000_6000_s_4_2.png
10	pescado de mar	121	1.5	libra	2	11	2023-05-01	https://png.pngtree.com/png-vector/20201129/ourmid/pngtree-fresh-fish-png-image_2452970.jpg
6	aceite 1lt	142	1.5	unidad	17	35	2023-04-10	https://almacenesarcos.com/wp-content/uploads/2021/11/1156-ACEITE-PALMA-DE-ORO-BOTELLA-900-CC.jpg
15	leche parmalat 1lt	139	0.98	unidad	7	59	2023-04-01	https://static.wixstatic.com/media/516d53_b0e499d21c5c4c3b9c1c05cfd2aa94e2~mv2.png/v1/fill/w_560,h_810,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/516d53_b0e499d21c5c4c3b9c1c05cfd2aa94e2~mv2.png
16	salchica vianesa	142	1.1	unidad	9	22	2023-03-21	https://thumbs.dreamstime.com/b/salchichas-vienesas-con-la-albahaca-aislada-en-el-fondo-blanco-147746126.jpg
9	carne de res fileteada	143	2.1	libra	2	15	2023-07-14	https://e7.pngegg.com/pngimages/192/665/png-clipart-meat-meat.png
1	coca cola 1lt	135	1.25	unidad	3	30	2023-02-25	https://e7.pngegg.com/pngimages/328/478/png-clipart-coca-cola-coca-cola.png
12	mangos	132	0.50	libra	4	33	2023-06-02	https://e7.pngegg.com/pngimages/743/349/png-clipart-mango-mango.png
13	atun real mediano	183	1.15	unidad	5	12	2023-03-22	https://laespanola.com.ec/images/thumbs/0002170_00032813.jpeg
14	leche miel	140	1.50	unidad	6	9	2024-01-01	https://www.seekpng.com/png/full/415-4156204_la-universalla-universal-leche-miel-caramelos-surtidos-la.png
3	galletas amor medianas de vainilla	155	1.1	unidad	16	15	2023-03-01	https://www.confiteriaminerva.com/wp-content/uploads/AMOR.100.VAINILLA.png
4	galletas amor medianas de chocolate	160	1.1	unidad	16	25	2023-07-11	http://cdn.shopify.com/s/files/1/0687/0745/1169/products/Picsart_22-12-08_17-32-45-110.png?v=1671244678
5	galletas amor grande de fresa	165	1.75	unidad	16	23	2023-05-11	https://www.surtimovil.com/wp-content/uploads/2020/07/Galletas-Amor-Fresa-175-g-1.png
7	az??car 1kg	130	0.99	unidad	18	23	2023-05-01	https://www.laespanola.com.ec/images/thumbs/0003568_azucar-blanca-san-carlos-1-kg.png
11	papas	126	0.35	libra	1	36	2023-04-22	https://i.pinimg.com/originals/5e/55/0b/5e550bf0db0d9850d4f97d05bb45b07e.png
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, address, city, image_url, password) FROM stdin;
2	Mario	mario@ejemplo.com	\N	\N	\N	$2a$10$IvtgyLnlZxNypij61VtwseT13BsStw62Kvmwj2MQ.wg.CtNqIEkoa
1	Admin	admin@admin.com	\N	\N	\N	$2a$10$UMsChpGK3paRX6gjX4JUyuddlH3sVN6NoymSVG2GTDOEAZk2qC.ni
11	Mario bros	mario@ejemplo1.com	\N	\N	\N	$2a$10$5QHxQO3pWpuBcP7sOa0CiOHLXgvlD.fhUTtoR0YSeEAwhS6ozcONe
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, true);


--
-- Name: delivery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.delivery_id_seq', 10, true);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 1, false);


--
-- Name: invoice_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_detail_id_seq', 37, true);


--
-- Name: invoice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_id_seq', 26, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: delivery delivery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: invoice_detail invoice_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_detail
    ADD CONSTRAINT invoice_detail_pkey PRIMARY KEY (id);


--
-- Name: invoice invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: product fk_category; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES public.category(id) NOT VALID;


--
-- Name: delivery fk_employee; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fk_employee FOREIGN KEY (employee) REFERENCES public.employee(id) NOT VALID;


--
-- Name: delivery fk_invoice; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fk_invoice FOREIGN KEY (invoice) REFERENCES public.invoice(id) NOT VALID;


--
-- Name: invoice_detail fk_product; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_detail
    ADD CONSTRAINT fk_product FOREIGN KEY (product) REFERENCES public.product(id) NOT VALID;


--
-- Name: employee fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT fk_user FOREIGN KEY ("user") REFERENCES public.users(id) NOT VALID;


--
-- Name: invoice fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT fk_user FOREIGN KEY (invoice_user) REFERENCES public.users(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

