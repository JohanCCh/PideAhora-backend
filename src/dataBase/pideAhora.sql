PGDMP         "                {         	   pideAhora    14.5    14.5 -    )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ,           1262    16505 	   pideAhora    DATABASE     g   CREATE DATABASE "pideAhora" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "pideAhora";
                postgres    false            ?            1259    16599    category    TABLE     V   CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying
);
    DROP TABLE public.category;
       public         heap    postgres    false            ?            1259    16598    category_id_seq    SEQUENCE     ?   ALTER TABLE public.category ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            ?            1259    16621    delivery    TABLE     ?   CREATE TABLE public.delivery (
    id integer NOT NULL,
    is_delivered boolean,
    employee integer,
    invoice integer,
    date date,
    address character varying
);
    DROP TABLE public.delivery;
       public         heap    postgres    false            ?            1259    16620    delivery_id_seq    SEQUENCE     ?   ALTER TABLE public.delivery ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            ?            1259    16575    employee    TABLE     j   CREATE TABLE public.employee (
    id integer NOT NULL,
    user_e integer,
    role character varying
);
    DROP TABLE public.employee;
       public         heap    postgres    false            ?            1259    16574    employee_id_seq    SEQUENCE     ?   ALTER TABLE public.employee ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.employee_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            ?            1259    16607    invoice    TABLE     ?   CREATE TABLE public.invoice (
    id integer NOT NULL,
    invoice_user integer,
    delivery_commission numeric,
    total numeric,
    date date
);
    DROP TABLE public.invoice;
       public         heap    postgres    false            ?            1259    16615    invoice_detail    TABLE     ?   CREATE TABLE public.invoice_detail (
    id integer NOT NULL,
    invoice integer,
    product integer,
    quantity integer
);
 "   DROP TABLE public.invoice_detail;
       public         heap    postgres    false            ?            1259    16614    invoice_detail_id_seq    SEQUENCE     ?   ALTER TABLE public.invoice_detail ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.invoice_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            ?            1259    16606    invoice_id_seq    SEQUENCE     ?   ALTER TABLE public.invoice ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.invoice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            ?            1259    16591    product    TABLE       CREATE TABLE public.product (
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
    DROP TABLE public.product;
       public         heap    postgres    false            ?            1259    16590    product_id_seq    SEQUENCE     ?   ALTER TABLE public.product ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            ?            1259    16567    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    email character varying,
    address character varying,
    city character varying,
    image_url character varying,
    password character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16566    users_id_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210                       0    16599    category 
   TABLE DATA                 public          postgres    false    216   .0       &          0    16621    delivery 
   TABLE DATA                 public          postgres    false    222   !1                 0    16575    employee 
   TABLE DATA                 public          postgres    false    212   2       "          0    16607    invoice 
   TABLE DATA                 public          postgres    false    218   ?2       $          0    16615    invoice_detail 
   TABLE DATA                 public          postgres    false    220   K3                 0    16591    product 
   TABLE DATA                 public          postgres    false    214   /4                 0    16567    users 
   TABLE DATA                 public          postgres    false    210   ?9       -           0    0    category_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.category_id_seq', 1, true);
          public          postgres    false    215            .           0    0    delivery_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.delivery_id_seq', 12, true);
          public          postgres    false    221            /           0    0    employee_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.employee_id_seq', 1, false);
          public          postgres    false    211            0           0    0    invoice_detail_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.invoice_detail_id_seq', 43, true);
          public          postgres    false    219            1           0    0    invoice_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.invoice_id_seq', 28, true);
          public          postgres    false    217            2           0    0    product_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.product_id_seq', 7, true);
          public          postgres    false    213            3           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 14, true);
          public          postgres    false    209            ?           2606    16605    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    216            ?           2606    16625    delivery delivery_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pkey;
       public            postgres    false    222            }           2606    16581    employee employee_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    212            ?           2606    16619 "   invoice_detail invoice_detail_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.invoice_detail
    ADD CONSTRAINT invoice_detail_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.invoice_detail DROP CONSTRAINT invoice_detail_pkey;
       public            postgres    false    220            ?           2606    16613    invoice invoice_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_pkey;
       public            postgres    false    218                       2606    16597    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    214            {           2606    16573    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?           2606    16631    product fk_category    FK CONSTRAINT     ?   ALTER TABLE ONLY public.product
    ADD CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES public.category(id) NOT VALID;
 =   ALTER TABLE ONLY public.product DROP CONSTRAINT fk_category;
       public          postgres    false    216    3201    214            ?           2606    16651    delivery fk_employee    FK CONSTRAINT     ?   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fk_employee FOREIGN KEY (employee) REFERENCES public.employee(id) NOT VALID;
 >   ALTER TABLE ONLY public.delivery DROP CONSTRAINT fk_employee;
       public          postgres    false    222    212    3197            ?           2606    16656    delivery fk_invoice    FK CONSTRAINT     ~   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT fk_invoice FOREIGN KEY (invoice) REFERENCES public.invoice(id) NOT VALID;
 =   ALTER TABLE ONLY public.delivery DROP CONSTRAINT fk_invoice;
       public          postgres    false    218    222    3203            ?           2606    16641    invoice_detail fk_product    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice_detail
    ADD CONSTRAINT fk_product FOREIGN KEY (product) REFERENCES public.product(id) NOT VALID;
 C   ALTER TABLE ONLY public.invoice_detail DROP CONSTRAINT fk_product;
       public          postgres    false    3199    214    220            ?           2606    16636    employee fk_user    FK CONSTRAINT     x   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT fk_user FOREIGN KEY (user_e) REFERENCES public.users(id) NOT VALID;
 :   ALTER TABLE ONLY public.employee DROP CONSTRAINT fk_user;
       public          postgres    false    210    3195    212            ?           2606    16646    invoice fk_user    FK CONSTRAINT     }   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT fk_user FOREIGN KEY (invoice_user) REFERENCES public.users(id) NOT VALID;
 9   ALTER TABLE ONLY public.invoice DROP CONSTRAINT fk_user;
       public          postgres    false    218    3195    210                ?   x???M
?0??}O????ŕQ???4k ?%M??g?bf?	?m?i??7=d?S.?C~MW?F
<V?{?X???pǡ?l??]&b???+?`?7Q?????Y?\`?K??Y?W?y??ր????E?;|3,??|??#????m?J?֯?ߋ?k?z9?h????%E? ??+2??]????St7p???Sv?w????
?A^?????????W??}}9X?      &   ?   x???;k?0 ?ݿ?6'?K?#%S???@?v-?t?@??????@?[4
?Cˇt??v???p?_ay?֨?Fk??V?]??????;??q>=g?b?e???ڡ?[?9}~?o??*?oxVA?k.v??1^?Σ
?Vn?Ő??S??A"??@M??d50F}
??E?ѥ]VDKuj+yV?5??wh?~??E4/???"?كB3ƄSp?	+tA?tE???H?         a   x???v
Q???W((M??L?K?-?ɯLMU??L?Q(-N-?O?Q(??I?Ts?	uV?0?Q "?Ĕ?̼?⒢Ĕ?"uMk.O??3g??<.. $?1?      "   ?   x??н
?0?ݧ?M?̇V???A(??*6f?)~A߾
??q?q???ev? /???W?Vê???????I?Z٩U??Z??WӤ??`?s?m?f?></?GV?GCdk!H1C?Ґ? d??v??\???<5?^
f?H"f??|??=52T[<7?afO=m$????`	Ǳ)???8_0?"?      $   ?   x??Խ
?0?ݧ?Q!?|?Q???A(??Z?:Dm???}/$?p??@?_?$w????uP7???5?᠗慎?9N??3?zd??l?u???????????|?W-Ĳ` 9!p??Մ???8???ɒ\V?gV??ptN/?=H?B+bI????:??:T?2?"@y???,Ly?N????Ӷ?0b;?$u?=??,??????g?rbZ9?Q?P??x         [  x??Xێ?6}?W?m@/uiQn?-?d?d?W??h?]ITE???!???X??e??d??/l??$?̙3C_??p??6?z{{????2?So?^?::Ѫ0??Ȼ0?tڕ???:?[%?f?_R8?2ç0pƉ??7?\?l?p?T???Ӧ݊?*7C?*??????C?2?+??ޭ.&.?0fjQ?$<??#,F$E????ڹ????j?????i#%?NUx???DN?}[?y^???ū_\? ????V;?a? %p??հ?
??e??)ց???a`?V?Z??g?˼?LI&T??DeU.?q*2?\????[V?eJ?_l??,???R,????򄇟?,'??d%??LH??R7ޕ4c0?X2???y??mI?4-i????Pu?g????F?"?蕕?6A??V>j?z>?I =????:$???r?Rca??J:3`x?P?
l6??C?A?5Zj????{c	gEF???9a4???Z=p]@R?q#?O?"??=Н'??GH=CyNӚ?eETR5???D?U!?$\.k&D?(?iu$???<???!??Y?GK3
E??]??R[-:e?D??q????;??[o??F??Dk?n????aq??j嗷H?5??k!a?m#j?T?T??????I?h?eIJY:/
{>?Nw??8$^ ?QN?#x ?lo????]n?ծ̳B?V?\-ZL?S?U?ϲѐ,???̈???6?e|L??x0??i)?^?T:+??P???q,?<?? ??f????,?1PC?	
?Y+?????Q/i?L? =?'?a?Æ,?q??l?f?י?!9i|?Us?v??D?t????GҾ??"?ԝ/?(?r?P???2???#??V 4?1?#oA??Ӎ?|s??pk^xyA1??h??c갳ԁ???????w Op??g????7?0?&>EVU??Dk????/Pݭ?T?Qp=?U+_?&??[P??کA?Vwj؎r?w??ONuo?ƈ??ś??%$???z{u}??Ncً^?zÈכx?k??8?tP?r???l??1?^?N4s?9Ǥ???Z??"u?sR'?"?	???W$S???)????(9??䀞2?D(?""????? ??+?]????-^_^?^?w??7??%?y?~?????????????ܒk????1???\쬟9%?'?.?k????;??j??`??&Y???8??-~?%`????ϴp??J8,L<?~??Dӌ?$I?|>(?'(???cW??cc???ۉ2????O <U>_?Z???3$?&??????߼]D3?V??+7????C=>???jUg????y*???"?<?K?y???	???|/???VGp^???!?         ]  x???Kk?@??????|DM*?h5?XM?y??2f?:?1?L?4??&??BWn?=???qL???.??kC??#?2A???2\#2?h$!diZ?@:?׌??	??7?/<݁FWi??H?A?}k+?YY?bq?R]A?n??-???Ͻ?7????Ͻ"?8???o?V\0?7Ý??xwV?'????5?N ???%?a\??ʌՙI?S{?#????(?o??C2L?\W?y?1͙????"'???g`????$??tBE??9?	Gⷣ??$)DQD ?????A.)' ?Aj???ɯf?n?S???ggCiۦv?}?ضgO????jI??ok??y??`?ͧ     