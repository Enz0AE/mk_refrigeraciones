import Link from "next/link";

export default function EquiposPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-section-gap px-margin-edge bg-surface-container-low border-b border-outline-variant relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-surface-tint/10 text-primary-container font-mono text-label-sm uppercase tracking-widest mb-6 border border-outline-variant">
            Cat&aacute;logo Industrial 2024
          </span>
          <h1 className="font-display text-display-lg md:text-[64px] md:leading-[72px] text-primary-container mb-6 max-w-4xl mx-auto">
            Soluciones Frigor&iacute;ficas de Alta Capacidad
          </h1>
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg">
            Equipamiento modular, contenedores reefer y sistemas de exhibici&oacute;n comercial dise&ntilde;ados para mantener la cadena de fr&iacute;o con precisi&oacute;n t&eacute;cnica absoluta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contenedores"
              className="w-full sm:w-auto px-8 py-4 bg-primary-container text-white font-mono font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 text-technical"
            >
              <span>Ver Contenedores</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </Link>
            <Link
              href="#comercial"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-primary-container text-primary-container font-mono font-bold hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 text-technical"
            >
              <span>L&iacute;nea Comercial</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenedores Reefer */}
      <section className="w-full py-section-gap px-margin-edge" id="contenedores">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-headline-lg text-primary-container mb-2">Contenedores Reefer</h2>
              <p className="font-body text-body-md text-on-surface-variant">Soluciones modulares port&aacute;tiles (10, 20 y 40 ft).</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-md">
            {/* Main 40ft */}
            <div className="md:col-span-8 bg-white border border-outline-variant p-6 flex flex-col justify-between">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#e0f2fe] text-[#0369a1] font-mono text-[12px] font-bold mb-4">ALTA DEMANDA</span>
                <h3 className="font-heading text-[28px] leading-8 text-primary-container mb-2">Contenedor 40 FT High Cube</h3>
                <p className="text-on-surface-variant max-w-md">M&aacute;xima capacidad para almacenamiento masivo. Ideal para frigor&iacute;ficos y centros log&iacute;sticos.</p>
              </div>
              <div className="relative w-full aspect-video bg-surface-container-low mb-6 overflow-hidden border border-outline-variant">
                <img
                  alt="Contenedor Reefer 40ft"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApduDDfwVyhhZGREXXuvNkzGaJ2qws8jQMuhLYOha-MIYqZqyCqF7J-Mur_2GCs-llqF1jO35UhrWuXCAI48Ips1IWhn_xrzK7y13rMf2NNv9k6W9E94Hxn4J01Ga8kDkr9BxtPToqszxUk1T3wTTuUgmBN1WlS023B-BMPoe4nI5eZcJHROo5QzBYitWnifFTY9o7Rlp4kKs8F7E1ChLYYgh-KpQs4Mxb9z_LLb_lq57cu8ctYGbgbtD-a6BJBILIiAsbNd7ICis"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 font-mono text-technical border-t border-outline-variant pt-4">
                <div><span className="block text-outline text-[11px] uppercase mb-1">Volumen</span><span className="font-bold text-primary-container">67.5 m&sup3;</span></div>
                <div><span className="block text-outline text-[11px] uppercase mb-1">Rango Temp</span><span className="font-bold text-primary-container">-25&deg;C a +25&deg;C</span></div>
                <div><span className="block text-outline text-[11px] uppercase mb-1">Consumo</span><span className="font-bold text-primary-container">12 kW/h max</span></div>
              </div>
            </div>
            {/* 20ft & 10ft */}
            <div className="md:col-span-4 flex flex-col gap-gutter-md">
              <div className="bg-white border border-outline-variant p-6 flex-1 flex flex-col">
                <h4 className="font-heading text-[20px] leading-6 text-primary-container mb-2">Modelo 20 FT</h4>
                <p className="text-on-surface-variant text-sm mb-4 flex-1">Soluci&oacute;n vers&aacute;til para espacios intermedios y locales comerciales.</p>
                <ul className="font-mono text-[13px] space-y-2 mb-4 text-primary-container">
                  <li className="flex justify-between border-b border-surface-variant pb-1"><span>Volumen:</span> <span className="font-bold">28.3 m&sup3;</span></li>
                  <li className="flex justify-between border-b border-surface-variant pb-1"><span>Largo ext:</span> <span className="font-bold">6.06 m</span></li>
                </ul>
                <button className="w-full py-2 border border-primary-container text-primary-container font-mono text-[13px] font-bold hover:bg-surface-variant transition-colors uppercase">Ficha T&eacute;cnica</button>
              </div>
              <div className="bg-white border border-outline-variant p-6 flex-1 flex flex-col">
                <h4 className="font-heading text-[20px] leading-6 text-primary-container mb-2">Modelo 10 FT</h4>
                <p className="text-on-surface-variant text-sm mb-4 flex-1">Ultra compacto. Perfecto para eventos o expansiones r&aacute;pidas.</p>
                <ul className="font-mono text-[13px] space-y-2 mb-4 text-primary-container">
                  <li className="flex justify-between border-b border-surface-variant pb-1"><span>Volumen:</span> <span className="font-bold">14.1 m&sup3;</span></li>
                  <li className="flex justify-between border-b border-surface-variant pb-1"><span>Largo ext:</span> <span className="font-bold">2.99 m</span></li>
                </ul>
                <button className="w-full py-2 border border-primary-container text-primary-container font-mono text-[13px] font-bold hover:bg-surface-variant transition-colors uppercase">Ficha T&eacute;cnica</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Line */}
      <section className="w-full py-section-gap px-margin-edge bg-surface-container-low border-y border-outline-variant" id="comercial">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-headline-lg text-primary-container mb-4">L&iacute;nea Comercial: Exhibici&oacute;n y Bateas</h2>
            <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto">Sistemas dise&ntilde;ados para la venta directa al p&uacute;blico, combinando est&eacute;tica impecable con rendimiento t&eacute;rmico superior.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
            {/* Vertical Display */}
            <div className="bg-white border border-outline-variant flex flex-col h-full group hover:shadow-[0_4px_20px_-4px_rgba(10,37,64,0.1)] transition-shadow duration-300">
              <div className="relative w-full h-80 overflow-hidden border-b border-outline-variant bg-surface-variant">
                <img alt="Exhibidor Vertical" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPr04QuopphuDHaJtJtfMLZJqT8q6MNKsz1Kq92iPyupeeAiwExMd648qNTm6jjHBsJ5pxtDPP9yNltH_RolTb2u7i9WZEnkDLe6dUm0dMzxNtMTpslbJtd9ejb_pR6QkQxEYzHGnh_pKtBf7Fqgx0c3UtYqmsDym-bH_t7SDsTl4YipzmhSSQrJe-rgUkaRD-txVTf_Dd8U7ZnVPdTfZUNTGl1QEJZN4QwI_aTim-WeeC27156tzAc5Y1GzeJaShGhurZ9vhdgaU" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-mono text-[11px] font-bold uppercase border border-outline-variant">L&iacute;nea Supermercado</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-[24px] text-primary-container mb-3">Exhibidores Verticales de L&aacute;cteos</h3>
                <p className="text-on-surface-variant mb-6 flex-1">Cortinas de aire optimizadas para reducir la p&eacute;rdida de fr&iacute;o. Iluminaci&oacute;n LED integrada de alta fidelidad crom&aacute;tica.</p>
                <div className="space-y-3 font-mono text-[13px] text-primary-container mb-8">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">ac_unit</span> <span>Temp: 2&deg;C a 8&deg;C</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">straighten</span> <span>Modulos desde 1.25m a 3.75m</span></div>
                </div>
                <button className="w-full py-3 bg-primary text-white font-mono font-bold hover:bg-primary-container transition-colors uppercase text-technical">Cotizar M&oacute;dulos</button>
              </div>
            </div>
            {/* Butcher Display */}
            <div className="bg-white border border-outline-variant flex flex-col h-full group hover:shadow-[0_4px_20px_-4px_rgba(10,37,64,0.1)] transition-shadow duration-300">
              <div className="relative w-full h-80 overflow-hidden border-b border-outline-variant bg-surface-variant">
                <img alt="Batea Carnicera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0jCOvPibWbJNBAwJOD2cOETVVHg-tep2KWGk5gPzGJfrTNLdyDpOvaBJD9XJxf3Bzsw3xLwBmhGd1Hvlxu1lOvi_JMNv7GI-Qe1-I5meFxcg7_Y1OMEodw41jvezDvoUwAArPuSFCvjcXlNq6ueXzQkjd1UtoN_lIlUqKwm-zcwNJnM5qXrlTMYFOz6NMfxC1i6k_Q2fZcblHDQAkZz7gbRIoQe2NEzfLgJFZkdU6lsyCFsOl4_zf7Rf_NTDReCci7EszPVu3Nqo" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-mono text-[11px] font-bold uppercase border border-outline-variant">L&iacute;nea Carnicer&iacute;a</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-[24px] text-primary-container mb-3">Bateas Carniceras Inox</h3>
                <p className="text-on-surface-variant mb-6 flex-1">Interior en acero inoxidable AISI 304. Sistema de fr&iacute;o est&aacute;tico o forzado seg&uacute;n requerimiento del cliente.</p>
                <div className="space-y-3 font-mono text-[13px] text-primary-container mb-8">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">ac_unit</span> <span>Temp: 0&deg;C a 5&deg;C</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">straighten</span> <span>Profundidad de exhibici&oacute;n: 900mm</span></div>
                </div>
                <button className="w-full py-3 bg-primary text-white font-mono font-bold hover:bg-primary-container transition-colors uppercase text-technical">Cotizar Batea</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaporators & Contract Modes */}
      <section className="w-full py-section-gap px-margin-edge bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-md">
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant p-8 md:p-10 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
            <h2 className="font-heading text-headline-lg text-primary-container mb-6">Unidades Evaporadoras</h2>
            <p className="font-body text-body-md text-on-surface-variant mb-8 max-w-lg">Sistemas de intercambio t&eacute;rmico de alta eficiencia para c&aacute;maras frigor&iacute;ficas industriales.</p>
            <div className="relative w-full aspect-video mb-8 border border-outline-variant">
              <img alt="Unidad Evaporadora Industrial" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1whkSeMMZ0LBqwSl7d5ZCC-Y3WCMUKA1zRng1EVqqnXq5K_cfUXTtlfjdaFJdGJW_jOKbij_iQZfbn6miIVwgLshxAhXB820D2JkjEmABfAEB6OBBmYJwRHl6GGf3Cdl1JKWr8wwraICaJwSjEwMOyQqwtvNFMB51zRrf6_L1HDH6MyNmb6CoUY1nr4QREgY2Cs9_ogDyptXu7zCkigWTXHaKPtJlr4Noch1_bU5G_SufvaQMTje3kcZV8hkbHSw9o-MQXBsyCDw" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm">
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">Capacidad Frigor&iacute;fica</span>
                <span className="font-bold text-primary-container block">Desde 2.5 kW hasta 80 kW</span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">Paso de Aleta</span>
                <span className="font-bold text-primary-container block">4.5mm / 6.0mm / 9.0mm</span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">Descongelamiento</span>
                <span className="font-bold text-primary-container block">El&eacute;ctrico / Gas Caliente</span>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <span className="block text-outline text-[11px] uppercase mb-1">Carcasa</span>
                <span className="font-bold text-primary-container block">Aluminio Magnesio Pinta blanca</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary-container text-white p-8 md:p-10 flex-1 flex flex-col justify-center">
              <h3 className="font-heading text-[28px] mb-8">Modalidades de Adquisici&oacute;n</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-safety-orange transition-colors duration-300">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">Venta Directa</h4>
                    <p className="text-white/70 text-sm font-body">Equipos nuevos y reacondicionados con garant&iacute;a de 12 meses y servicio t&eacute;cnico prioritario.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-secondary-fixed-dim group-hover:text-primary-container transition-colors duration-300">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">Alquiler Mensual</h4>
                    <p className="text-white/70 text-sm font-body">Ideal para picos de producci&oacute;n o eventos. Mantenimiento preventivo incluido en la cuota.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors duration-300">
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-[18px] mb-1">Leasing Operativo</h4>
                    <p className="text-white/70 text-sm font-body">Renovaci&oacute;n tecnol&oacute;gica constante. Cuotas deducibles de impuestos con opci&oacute;n a compra.</p>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full py-4 bg-safety-orange text-white font-mono font-bold hover:brightness-110 transition-colors uppercase tracking-wider text-technical">
                Consultar Opciones
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
