/**********************
 * DATOS DE PRODUCTOS
 **********************/
const productos = [

    //--Alimentos--//

    // Bebidas
    {
        id: "coca_cola",
        nombre: "Coca Cola",
        url: "productos/Alimentos/bebidas/coca_cola.html",
        categoria: "Bebidas",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/coca_cola.avif"
    },
    {
        id: "country_club_frambuesa",
        nombre: "Country Club Frambuesa",
        url: "productos/Alimentos/bebidas/country_club_frambuesa.html",
        categoria: "Bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/country_club_frambuesa.avif"
    },
      {
        id: "country_club_uva",
        nombre: "Country Club Uva",
        url: "productos/Alimentos/bebidas/country_club_uva.html",
        categoria: "Bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/country_club_uva.avif"
    },
     {
        id: "gatorade_uva",
        nombre: "Gatorade Uva",
        url: "productos/Alimentos/bebidas/gatorade_uva.html",
        categoria: "Bebidas",
        precio: 75, // número para carrito
        precioTexto: "Precio: $75", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/energizantes/gatorade_uva.avif"
    },
     {
        id: "jugo_de_naranja_rica",
        nombre: "Jugo de Naranja Rica",
        url: "productos/Alimentos/bebidas/jugo_naranja_rica.html",
        categoria: "Bebidas",
        precio: 55, // número para carrito
        precioTexto: "Precio: $55", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/jugo/jugo_naranja_rica.avif"
    },
      {
        id: "jugo_de_pera_santal",
        nombre: "Jugo de Pera Santal",
        url: "productos/Alimentos/bebidas/jugo_pera_santal.html",
        categoria: "Bebidas",
        precio: 30, // número para carrito
        precioTexto: "Precio: $30", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/jugo/jugo_pera_santal.avif"
    },
    {
        id: "red_bull",
        nombre: "Red Bull",
        url: "productos/Alimentos/bebidas/red_bull.html",
        categoria: "Bebidas",
        precio: 90, // número para carrito
        precioTexto: "Precio: $90", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/energizantes/red_bull.avif"
    },

    //Carnes, pescados y mariscos
    {
        id: "camarones_crudos",
        nombre: "Camarones Crudos",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/camarones_crudos.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 350, // número para carrito
        precioTexto: "$350.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/mariscos/camarones_crudos.avif"
    },
    {
        id: "camarones_pre_cocidos",
        nombre: "Camarones Pre-cocidos",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/camarones_precocidos.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 400, // número para carrito
        precioTexto: "$400.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/mariscos/camarones_pre-cocidos.avif"
    },
     {
        id: "carne_de_res_para_hamburguesas",
        nombre: "Carne de Res para Hamburguesas",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/carne_de_res_para_hamburguesas.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 370, // número para carrito
        precioTexto: "$370.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/res/carne_de_res.avif"
    },
    {
        id: "chuleta_de_cerdo",
        nombre: "Chuleta de Cerdo",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/chuleta_de_cerdo.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 300, // número para carrito
        precioTexto: "$300.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/cerdo/chuleta_de_cerdo.avif"
    },
     {
        id: "pollo_entero_don_pollo",
        nombre: "Pollo Entero Don Pollo",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/pollo_entero_don_pollo.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 300, // número para carrito
        precioTexto: "$300.00 / unidad", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/pollo/pollo.avif"
    },
     {
        id: "tilapia_roja",
        nombre: "Tilapia Roja",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/tilapia_roja.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 250, // número para carrito
        precioTexto: "$250.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/pescado/tilapia_roja.avif"
    },
    
    //Despensa
    {
        id: "aceite_crisol",
        nombre: "Aceite Crisol",
        url: "productos/Alimentos/despensa/aceite_crisol.html",
        categoria: "despensa",
        precio: 95, // número para carrito
        precioTexto: "$95.00", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/aceites/aceite_crisol.avif"
    },
    {
        id: "aceite_de_oliva_extra_virgen",
        nombre: "Aceite de Oliva Extra Virgen",
        url: "productos/Alimentos/despensa/aceite_oliva_extra_virgen.html",
        categoria: "despensa",
        precio: 230, // número para carrito
        precioTexto: "$230.00", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/aceites/aceite_de_oliva_extra_virgen.avif"
    },
    {
        id: "mayonesa_baldom",
        nombre: "Mayonesa Baldom",
        url: "productos/Alimentos/despensa/mayonesa_baldom.html",
        categoria: "despensa",
        precio: 95, // número para carrito
        precioTexto: "$95", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/aderezos_y_salsas/mayonesa_baldom.avif"
    },
    {
        id: "sal_marina_refisal",
        nombre: "Sal Marina Refisal",
        url: "productos/Alimentos/despensa/sal_refisal.html",
        categoria: "despensa",
        precio: 65, // número para carrito
        precioTexto: "$65.00", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/condimentos/sal_marina_refisal.jpg"
    },
     {
        id: "sazon_completo_maggi",
        nombre: "Sazón Completo Maggi",
        url: "productos/Alimentos/despensa/sazon_completo_maggi.html",
        categoria: "despensa",
        precio: 80, // número para carrito
        precioTexto: "$80.00", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/condimentos/sazon_completo_maggi.avif"
    },
     {
        id: "sopita_doña_gallina",
        nombre: "Sopita Doña Gallina",
        url: "productos/Alimentos/despensa/sopita_dona_gallina.html",
        categoria: "despensa",
        precio: 150, // número para carrito
        precioTexto: "$150 / la caja", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/condimentos/sopita_doña_gallina.avif"
    },
    {
        id: "vinagre_baldom",
        nombre: "Vinagre Baldom",
        url: "productos/Alimentos/despensa/vinagre_baldom.html",
        categoria: "despensa",
        precio: 87, // número para carrito
        precioTexto: "$87 / botella", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Despensa/condimentos/vinagre_baldom.avif"
    },

    //Enlatados
    {
        id: "atun_dimar",
        nombre: "Atún Dimar",
        url: "productos/Alimentos/enlatados/atun_dimar.html",
        categoria: "enlatados",
        precio: 120, // número para carrito
        precioTexto: "Precio: $120 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/atun_dimar.avif"
    },
    {
        id: "gandules_verdes_goya",
        nombre: "Gandules Verdes Goya",
        url: "productos/Alimentos/enlatados/gandules_verdes_goya.html",
        categoria: "enlatados",
        precio: 180, // número para carrito
        precioTexto: "Precio: $80 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/gandules_verdes_goya.avif"
    },
     {
        id: "habichuelas_negras_goya",
        nombre: "Habichuelas Negras Goya",
        url: "productos/Alimentos/enlatados/habichuelas_negras_goya.html",
        categoria: "enlatados",
        precio: 50, // número para carrito
        precioTexto: "Precio: $50 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/habichuelas_negras_goya.avif"
    },
    {
        id: "maiz_la_famosa",
        nombre: "Maíz La Famosa",
        url: "productos/Alimentos/enlatados/maiz_la_famosa.html",
        categoria: "enlatados",
        precio: 45, // número para carrito
        precioTexto: "Precio: $45 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/maiz_la_famosa.avif"
    },
    {
        id: "salchichas_jaja",
        nombre: "Salchichas Jajá",
        url: "productos/Alimentos/enlatados/salchichas_jaja.html",
        categoria: "enlatados",
        precio: 45, // número para carrito
        precioTexto: "Precio: $45 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/salchichas_jaja.avif"
    },
    {
        id: "sardinas_gord",
        nombre: "Sardinas Gord",
        url: "productos/Alimentos/enlatados/sardinas_gord.html",
        categoria: "enlatados",
        precio: 85, // número para carrito
        precioTexto: "Precio: $85 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/sardinas_gord.avif"
    },
    {
        id: "tomates_pelados_la_famosa",
        nombre: "Tomates Pelados La Famosa",
        url: "productos/Alimentos/enlatados/tomates_pelados_la_famosa.html",
        categoria: "enlatados",
        precio: 60, // número para carrito
        precioTexto: "Precio: $60 / 1 Lata", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Enlatados/tomates_pelados.avif"
    },

    //Frutas y Verduras
    {
        id: "ajies_morrones",
        nombre: "Ajíes Morrones",
        url: "productos/Alimentos/Frutas_y_verduras/ajies_morrones.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "$80.00 / La unidad", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/Ajies_morron.avif"
    },
     {
        id: "cebollas_rojas",
        nombre: "Cebollas Rojas",
        url: "productos/Alimentos/Frutas_y_verduras/cebollas_rojas.html",
        categoria: "frutas_y_verduras",
        precio: 170, // número para carrito
        precioTexto: "$170.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/cebolla_roja.avif"
    },
    {
        id: "limones_persa",
        nombre: "Limones Persa",
        url: "productos/Alimentos/Frutas_y_verduras/limones_persa.html",
        categoria: "frutas_y_verduras",
        precio: 200, // número para carrito
        precioTexto: "$200 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/limon_persa.avif"
    },
    {
        id: "mandarinas",
        nombre: "Mandarinas",
        url: "productos/Alimentos/Frutas_y_verduras/mandarinas.html",
        categoria: "frutas_y_verduras",
        precio: 100, // número para carrito
        precioTexto: "$100.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/mandarinas.avif"
    },
    {
        id: "manzanas_amarillas",
        nombre: "Manzanas Amarillas",
        url: "productos/Alimentos/Frutas_y_verduras/manzanas_amarillas.html",
        categoria: "frutas_y_verduras",
        precio: 50, // número para carrito
        precioTexto: "$50.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/manzana_amarilla.avif"
    },
     {
        id: "manzanas_rojas",
        nombre: "Manzanas Rojas",
        url: "productos/Alimentos/Frutas_y_verduras/manzanas_rojas.html",
        categoria: "frutas_y_verduras",
        precio: 65, // número para carrito
        precioTexto: "$65.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/manzana_roja.avif"
    },
    {
        id: "manzanas_verdes",
        nombre: "Manzanas Verdes",
        url: "productos/Alimentos/Frutas_y_verduras/manzanas_verdes.html",
        categoria: "frutas_y_verduras",
        precio: 45, // número para carrito
        precioTexto: "$45.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/manzana_verde.avif"
    },
     {
        id: "paquete_de_fresas",
        nombre: "Paquete de Fresas",
        url: "productos/Alimentos/Frutas_y_verduras/paquete_de_fresas.html",
        categoria: "frutas_y_verduras",
        precio: 350, // número para carrito
        precioTexto: "$350.00 / 1 paquete", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/fresas.avif"
    },
    {
        id: "pepinos",
        nombre: "Pepinos",
        url: "productos/Alimentos/Frutas_y_verduras/pepinos.html",
        categoria: "frutas_y_verduras",
        precio: 35, // número para carrito
        precioTexto: "$35.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/pepino.avif"
    },
    {
        id: "tomates_de_ensalada",
        nombre: "Tomates de Ensalada",
        url: "productos/Alimentos/Frutas_y_verduras/tomates_de_ensalada.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "$80.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/tomate_de_ensalada.avif"
    },
    {
        id: "uvas_moradas",
        nombre: "Uvas Moradas",
        url: "productos/Alimentos/Frutas_y_verduras/uvas_moradas.html",
        categoria: "frutas_y_verduras",
        precio: 150, // número para carrito
        precioTexto: "$150.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/uva_morada.avif"
    },
    {
        id: "zanahorias",
        nombre: "Zanahorias",
        url: "productos/Alimentos/Frutas_y_verduras/zanahorias.html",
        categoria: "frutas_y_verduras",
        precio: 80, // número para carrito
        precioTexto: "$80.00 / 1 kg", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/frutas_y_verduras/zanahoria.avif"
    },

    //Lácteos y huevos
    {
        id: "huevos_don_pancho",
        nombre: "Huevos Don Pancho",
        url: "productos/Alimentos/lacteos_y_huevos/huevos.html",
        categoria: "lacteos_y_huevos",
        precio: 200, // número para carrito
        precioTexto: "Precio: $200 / 30 unidades", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/huevos/huevos_30unidades.avif"
    },
    {
        id: "leche_entera_rica",
        nombre: "Leche Entera Rica",
        url: "productos/Alimentos/lacteos_y_huevos/leche_entera_rica.html",
        categoria: "lacteos_y_huevos",
        precio: 65, // número para carrito
        precioTexto: "$65.00", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/leche/leche_entera_rica.avif"
    },
     {
        id: "queso_gorgonzola",
        nombre: "Queso Gorgonzola",
        url: "productos/Alimentos/lacteos_y_huevos/queso_gorgonzola.html",
        categoria: "lacteos_y_huevos",
        precio: 350, // número para carrito
        precioTexto: "Precio: $350 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/queso/queso_gorgonzola.avif"
    },
     {
        id: "queso_gouda",
        nombre: "Queso Gouda",
        url: "productos/Alimentos/lacteos_y_huevos/queso_gouda.html",
        categoria: "lacteos_y_huevos",
        precio: 280, // número para carrito
        precioTexto: "Precio: $280 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/queso/queso_gouda.avif"
    },
     {
        id: "yogurt_de_fresa_yoka",
        nombre: "Yogurt de Fresa Yoka",
        url: "productos/Alimentos/lacteos_y_huevos/yogurt_fresa_yoka.html",
        categoria: "lacteos_y_huevos",
        precio: 150, // número para carrito
        precioTexto: "Precio: $150", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/yogurt/yogurt_de_fresa.avif"
    },
    {
        id: "yogurt_natural_rica",
        nombre: "Yogurt Natural Rica",
        url: "productos/Alimentos/lacteos_y_huevos/yogurt_natural_rica.html",
        categoria: "lacteos_y_huevos",
        precio: 210, // número para carrito
        precioTexto: "Precio: $210 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/lacteos_y_huevos/yogurt/yogurt_natural.avif"
    },

    //--Electrodomésticos--//

    //Climatización
    {
        id: "aire_acondicionado_tecnomaster",
        nombre: "Aire Acondicionado Tecnomaster",
        url: "productos/electrodomesticos/climatizacion/aire_acondicionado_tecnomaster.html",
        categoria: "climatizacion",
        precio: 33000, // número para carrito
        precioTexto: "Precio: $33,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/aire_acondicionado/aire_acondicionado_tecnomaster.png"
    },
     {
        id: "aire_acondicionado_whirlpool",
        nombre: "Aire Acondicionado Whirlpool",
        url: "productos/electrodomesticos/climatizacion/aire_acondicionado_whirlpool.html",
        categoria: "climatizacion",
        precio: 40000, // número para carrito
        precioTexto: "Precio: $40,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/aire_acondicionado/aire_acondicionado_whirlpool.png"
    },
    {
        id: "ventilador_daiwa",
        nombre: "Ventilador Daiwa",
        url: "productos/electrodomesticos/climatizacion/ventilador_daiwa.html",
        categoria: "climatizacion",
        precio: 15000, // número para carrito
        precioTexto: "Precio: $15,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/ventiladores/ventilador_Daiwa.png"
    },
     {
        id: "ventilador_kdk",
        nombre: "Ventilador KDK",
        url: "productos/electrodomesticos/climatizacion/ventilador_kdk.html",
        categoria: "climatizacion",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/ventiladores/ventilador_KDK.avif"
    },
     {
        id: "ventilador_pequeno",
        nombre: "Ventilador Pequeño",
        url: "productos/electrodomesticos/climatizacion/ventilador_pequeno.html",
        categoria: "climatizacion",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/ventiladores/ventilador_pequeño.png"
    },
    {
        id: "ventilador_de_techo_kdk",
        nombre: "Ventilador de Techo KDK",
        url: "productos/electrodomesticos/climatizacion/ventilador_techo_kdk.html",
        categoria: "climatizacion",
        precio: 20000, // número para carrito
        precioTexto: "Precio: $20,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/climatizacion/ventiladores_de_techo/ventilador_de_techo_KDK.avif"
    },

    //Cocina
    {
        id: "bebedero_tecnomaster",
        nombre: "Bebedero Tecnomaster",
        url: "productos/electrodomesticos/cocina/bebedero_tecnomaster.html",
        categoria: "cocina",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/bebedero/bebedero_tecnomaster.avif"
    },
     {
        id: "cilindro_de_gas_duragas",
        nombre: "Cilindro de gas Duragas",
        url: "productos/electrodomesticos/cocina/cilindro_duragas.html",
        categoria: "cocina",
        precio: 5200, // número para carrito
        precioTexto: "Precio: $5,200", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/Cilindros_de_gas/cilindro_de_gas_duragas.avif"
    },
    {
        id: "estufa_lg",
        nombre: "Estufa LG",
        url: "productos/electrodomesticos/cocina/estufa_lg.html",
        categoria: "cocina",
        precio: 66000, // número para carrito
        precioTexto: "Precio: $66,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/Estufas/estufa_LG.avif"
    },
     {
        id: "extractor_de_grasa_drija",
        nombre: "Extractor de grasa Drija",
        url: "productos/electrodomesticos/cocina/extractor_drija.html",
        categoria: "cocina",
        precio: 6000, // número para carrito
        precioTexto: "Precio: $6,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/extractor_de_grasa/extractor_de_grasa_Drija.avif"
    },
    {
        id: "freezer_7_pies",
        nombre: "Freezer 7 Pies",
        url: "productos/electrodomesticos/cocina/freezer_7_pies.html",
        categoria: "cocina",
        precio: 16500, // número para carrito
        precioTexto: "Precio: $16,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/freezer/freezer_7pies.png"
    },
    {
        id: "nevera_lg",
        nombre: "Nevera LG",
        url: "productos/electrodomesticos/cocina/nevera_lg.html",
        categoria: "cocina",
        precio: 80000, // número para carrito
        precioTexto: "Precio: $80,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/cocina/Neveras/Nevera_LG.png"
    },

    //Lavado
    {
        id: "lavadora_dimensions",
        nombre: "Lavadora Dimensions",
        url: "productos/electrodomesticos/lavado/lavadora_dimensions.html",
        categoria: "lavado",
        precio: 10000, // número para carrito
        precioTexto: "Precio: $10,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/lavado/lavadora/lavadora_dimensions.png"
    },
    {
        id: "lavadora_frigidaire",
        nombre: "Lavadora Frigidaire",
        url: "productos/electrodomesticos/lavado/lavadora_frigidaire.html",
        categoria: "lavado",
        precio: 35000, // número para carrito
        precioTexto: "Precio: $35,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/lavado/lavadora/lavadora_frigidaire.png"
    },
    {
        id: "lavadora_lg",
        nombre: "Lavadora LG",
        url: "productos/electrodomesticos/lavado/lavadora_lg.html",
        categoria: "lavado",
        precio: 53000, // número para carrito
        precioTexto: "Precio: $53,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/lavado/lavadora/lavadora_LG.avif"
    },
     {
        id: "lavadora_y_secadora_lg",
        nombre: "Lavadora y Secadora LG",
        url: "productos/electrodomesticos/lavado/lavadora_secadora_lg.html",
        categoria: "lavado",
        precio: 55000, // número para carrito
        precioTexto: "Precio: $55,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/lavado/Lavadora y Secadora/Lavadora_y_secadora_LG.avif"
    },
    {
        id: "lavadora_y_secadora_tecnomaster",
        nombre: "Lavadora y Secadora Tecnomaster",
        url: "productos/electrodomesticos/lavado/lavadora_tecnomaster.html",
        categoria: "lavado",
        precio: 40000, // número para carrito
        precioTexto: "Precio: $40,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/Electrodomesticos/lavado/Lavadora y Secadora/Lavadora_y_secadora_tecnomaster.png"
    },
     //--Farmacia--//

     //Analgésicos
     {
        id: "equate_analgesico",
        nombre: "Equate Analgésico",
        url: "productos/farmacia/analgesicos/equate_analgesico.html",
        categoria: "analgesicos",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/analgesicos/equate.avif"
    },
    {
        id: "flanax_analgesico",
        nombre: "Flanax Analgésico",
        url: "productos/farmacia/analgesicos/flanax.html",
        categoria: "analgesicos",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/analgesicos/flanax.png"
    },
    {
        id: "thera_gesic_analgesico",
        nombre: "Thera-Gesic Analgésico",
        url: "productos/farmacia/analgesicos/thera_gesic.html",
        categoria: "analgesicos",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/analgesicos/thera-gesic.avif"
    },
     {
        id: "tylenol_analgesico",
        nombre: "Tylenol Analgésico",
        url: "productos/farmacia/analgesicos/tylenol.html",
        categoria: "analgesicos",
        precio: 5000, // número para carrito
        precioTexto: "Precio: $5000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/analgesicos/tylenol.avif"
    },
     {
        id: "vaporizing_analgesico",
        nombre: "Vaporizing Analgésico",
        url: "productos/farmacia/analgesicos/vaporizing.html",
        categoria: "analgesicos",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/analgesicos/vaporizing.avif"
    },

    //Antigripales y resfriados
    {
        id: "antiflu_des",
        nombre: "Antiflu-Des",
        url: "productos/farmacia/antigripales_y_resfriado/antiflu_Des.html",
        categoria: "antigripales_y_resfriado",
        precio: 1000, // número para carrito
        precioTexto: "Precio: $1,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/antigripales/antiflu-des.avif"
    },
    {
        id: "coldyflu",
        nombre: "Coldyflu",
        url: "productos/farmacia/antigripales_y_resfriado/coldyflu.html",
        categoria: "antigripales_y_resfriado",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/antigripales/coldyflu.avif"
    },
    {
        id: "mucinex",
        nombre: "Mucinex",
        url: "productos/farmacia/antigripales_y_resfriado/mucinex.html",
        categoria: "antigripales_y_resfriado",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/antigripales/mucinex.avif"
    },
    {
        id: "nyquil",
        nombre: "NyQuil",
        url: "productos/farmacia/antigripales_y_resfriado/nyquil.html",
        categoria: "antigripales_y_resfriado",
        precio: 3500, // número para carrito
        precioTexto: "Precio: $3,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/antigripales/nyquil.avif"
    },
    {
        id: "theraflu",
        nombre: "Theraflu",
        url: "productos/farmacia/antigripales_y_resfriado/theraflu.html",
        categoria: "antigripales_y_resfriado",
        precio: 2200, // número para carrito
        precioTexto: "Precio: $2,200", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/antigripales/theraflu.avif"
    },

    //Dermocosmética
    {
        id: "cerave_acido_hialuronico",
        nombre: "Cerave Ácido Hialurónico",
        url: "productos/farmacia/dermocosmetica/acido_hialuronico.html",
        categoria: "dermocosmetica",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Dermocosmetica/cerave_acido_hyaluronico.avif"
    },
     {
        id: "hidratante_cerave",
        nombre: "Hidratante Cerave",
        url: "productos/farmacia/dermocosmetica/hidratante_cerave.html",
        categoria: "dermocosmetica",
        precio: 1500, // número para carrito
        precioTexto: "Precio: $1,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Dermocosmetica/hidratante_cerave.jpg"
    },
    {
        id: "hidratante_eucerin",
        nombre: "Hidratante Eucerin",
        url: "productos/farmacia/dermocosmetica/hidratante_eucerin.html",
        categoria: "dermocosmetica",
        precio: 2200, // número para carrito
        precioTexto: "Precio: $2,200", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/dermocosmetica/hidratante_eucerin.avif"
    },
    {
        id: "hidratante_cerave_grande",
        nombre: "Hidratante Cerave Grande",
        url: "productos/farmacia/dermocosmetica/hidratante_grande.html",
        categoria: "dermocosmetica",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/dermocosmetica/hidratante_cerave_grande.avif"
    },
    {
        id: "retinol",
        nombre: "Retinol",
        url: "productos/farmacia/dermocosmetica/retinol.html",
        categoria: "dermocosmetica",
        precio: 1100, // número para carrito
        precioTexto: "Precio: $1,100", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/dermocosmetica/retinol.avif"
    },
     {
        id: "serum_vitamina_c",
        nombre: "Serum Vitamina C",
        url: "productos/farmacia/dermocosmetica/serum_vitaminac.html",
        categoria: "dermocosmetica",
        precio: 1400, // número para carrito
        precioTexto: "Precio: $1,400", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Dermocosmetica/serum_vitaminC.avif"
    },

    //Vitaminas y Minerales
     {
        id: "flintstones",
        nombre: "Flintstones Multivitamínico para Niños",
        url: "productos/farmacia/vitaminas_y_minerales/flintstones.html",
        categoria: "vitaminas_y_minerales",
        precio: 2500, // número para carrito
        precioTexto: "Precio: $2,500", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Vitaminas_y_Minerales/flintstones.avif"
    },
     {
        id: "Multivitaminico",
        nombre: "Multivitamínico",
        url: "productos/farmacia/vitaminas_y_minerales/Multivitaminico.html",
        categoria: "vitaminas_y_minerales",
        precio: 3000, // número para carrito
        precioTexto: "Precio: $3,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Vitaminas_y_Minerales/multivitaminico.avif"
    },
     {
        id: "omega3",
        nombre: "Omega 3",
        url: "productos/farmacia/vitaminas_y_minerales/omega3.html",
        categoria: "vitaminas_y_minerales",
        precio: 4000, // número para carrito
        precioTexto: "Precio: $4,000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Vitaminas_y_Minerales/omega3.avif"
    },
     {
        id: "Vitafusion",
        nombre: "Vitafusion",
        url: "productos/farmacia/vitaminas_y_minerales/vitafusion.html",
        categoria: "vitaminas_y_minerales",
        precio: 1300, // número para carrito
        precioTexto: "Precio: $1,300", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Vitaminas_y_Minerales/vitafusion.avif"
    },
     {
        id: "vitamina_c",
        nombre: "Vitamina C",
        url: "productos/farmacia/vitaminas_y_minerales/vitaminac.html",
        categoria: "vitaminas_y_minerales",
        precio: 2000, // número para carrito
        precioTexto: "Precio: $2000", // texto para mostrar en resultados
        imagen: "imagenes/productos/farmacia/Vitaminas_y_Minerales/vitaminaC.avif"
    },
























    
];

document.addEventListener("DOMContentLoaded", function () {
    const btnBuscar = document.getElementById("btn-buscar");
    const inputBuscar = document.getElementById("input-buscar");
    const resultados = document.getElementById("resultados-busqueda");
    const body = document.body;
    const contenedorResultados = document.getElementById("lista-resultados");
    const tituloResultados = document.getElementById("titulo-resultados");
    const sinResultados = document.getElementById("sin-resultados");

    /**********************
     * CARRO DE COMPRAS
     **********************/
    const STORAGE_KEY = 'carrito';
    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarritoEl = document.getElementById('total-carrito');
    let carrito = cargarCarrito();

    function guardarCarrito() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    }

    function cargarCarrito() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function renderizarCarrito() {
        if (!listaCarrito) return;
        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            listaCarrito.innerHTML = carrito.map(item => {
                const subtotal = (Number(item.precio) || 0) * (item.cantidad || 0);
                return `
                    <div class="item-carrito" data-id="${escapeHtml(item.id)}">
                        <div class="carrito-item-info">
                            <strong>${escapeHtml(item.nombre)}</strong>
                            <div>RD$ ${Number(item.precio).toLocaleString()}</div>
                        </div>
                        <div class="carrito-item-cantidad">
                            <button class="btn-decrease" aria-label="Disminuir cantidad">−</button>
                            <span class="cantidad">${item.cantidad}</span>
                            <button class="btn-increase" aria-label="Aumentar cantidad">+</button>
                        </div>
                        <div class="carrito-item-subtotal">RD$ ${Number(subtotal).toLocaleString()}</div>
                        <button class="btn-eliminar" aria-label="Eliminar producto">Eliminar</button>
                    </div>
                `;
            }).join('');
        }

        const total = carrito.reduce((sum, it) => sum + (Number(it.precio) || 0) * (it.cantidad || 0), 0);
        if (totalCarritoEl) totalCarritoEl.textContent = Number(total).toLocaleString();
        if (contadorCarrito) {
            const totalUnidades = carrito.reduce((s, it) => s + (it.cantidad || 0), 0);
            contadorCarrito.textContent = totalUnidades;
        }
    }

    function agregarProducto(producto) {
        const existente = carrito.find(i => i.id === producto.id);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push({ id: producto.id, nombre: producto.nombre, precio: Number(producto.precio) || 0, cantidad: 1 });
        }
        guardarCarrito();
        renderizarCarrito();
    }

    function eliminarProducto(id) {
        carrito = carrito.filter(i => i.id !== id);
        guardarCarrito();
        renderizarCarrito();
    }

    function cambiarCantidad(id, delta) {
        const item = carrito.find(i => i.id === id);
        if (!item) return;
        item.cantidad += delta;
        if (item.cantidad <= 0) {
            eliminarProducto(id);
        } else {
            guardarCarrito();
            renderizarCarrito();
        }
    }

    window.toggleCarrito = function () {
        const carritoEl = document.getElementById('carrito');
        if (!carritoEl) return;
        carritoEl.classList.toggle('activo');
    };

    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>\"']/g, function (m) {
            return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": "&#39;" })[m];
        });
    }

    renderizarCarrito();

    // Delegación global para botones de carrito
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-agregar');
        if (btn) {
            const card = btn.closest('.resultado-card');
            if (!card) return;
            const id = btn.dataset.id;
            const nombre = btn.dataset.nombre;
            const precio = Number(btn.dataset.precio) || 0;
            agregarProducto({ id, nombre, precio });
        }

        const itemEl = e.target.closest('.item-carrito');
        if (itemEl) {
            const id = itemEl.dataset.id;
            if (e.target.classList.contains('btn-eliminar')) eliminarProducto(id);
            if (e.target.classList.contains('btn-increase')) cambiarCantidad(id, 1);
            if (e.target.classList.contains('btn-decrease')) cambiarCantidad(id, -1);
        }
    });

    /**********************
     * BUSCADOR / AUTOCOMPLETADO
     **********************/
    if (btnBuscar && inputBuscar) {
        btnBuscar.addEventListener("click", function () {
            body.classList.toggle("menu-busqueda-activa");
            inputBuscar.focus();
        });
    }

    if (inputBuscar && resultados) {
        inputBuscar.addEventListener("input", function () {
            const valor = normalizarTexto(inputBuscar.value);
            resultados.innerHTML = "";

            if (!valor) {
                resultados.style.display = "none";
                return;
            }

            const coincidencias = productos.filter(p =>
                normalizarTexto(p.nombre).includes(valor)
            );

            if (coincidencias.length === 0) {
                resultados.style.display = "none";
                return;
            }

            coincidencias.forEach(p => {
                const li = document.createElement("li");
                li.textContent = p.nombre;
                li.addEventListener("click", () => irAResultados(p.nombre));
                resultados.appendChild(li);
            });

            resultados.style.display = "block";
        });

        inputBuscar.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const texto = inputBuscar.value.trim();
                if (texto !== "") irAResultados(texto);
            }
        });
    }

    /**********************
     * RESULTADOS DE BÚSQUEDA
     **********************/
    if (contenedorResultados && tituloResultados && sinResultados) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("q") || "";

        tituloResultados.textContent = `Resultados para: "${query}"`;

        const coincidencias = productos.filter(p =>
            normalizarTexto(p.nombre).includes(normalizarTexto(query))
        );

        if (coincidencias.length === 0) {
            sinResultados.style.display = "block";
            return;
        }

        sinResultados.style.display = "none";

        coincidencias.forEach(p => {
            const card = document.createElement("div");
            card.className = "resultado-card";

            card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <div class="resultado-info">
        <h3>${p.nombre}</h3>
        <div class="resultado-precio">
            ${p.precioTexto ? p.precioTexto : "RD$ " + Number(p.precio).toLocaleString()}
        </div>
        <div class="resultado-botones">
            <button class="btn-agregar"
                data-id="${p.id}"
                data-nombre="${p.nombre}"
                data-precio="${p.precio}">
                Agregar
            </button>
        </div>
    </div>
`;


      card.addEventListener("click", (e) => {
    // Si el click fue en el botón Agregar, NO navegar
    if (e.target.closest(".btn-agregar")) return;

    window.location.href = p.url;
});


            contenedorResultados.appendChild(card);
        });
    }
});

// Normalización de texto (para buscar)
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Redirige a la página de resultados
function irAResultados(texto) {
    const query = encodeURIComponent(texto.trim());
    window.location.href = `resultados_busqueda.html?q=${query}`;
}


 
