function downloadPDF(){
    const element = document.querySelector('.container-lg');
    const opt = {
        margin: 0,
        filename: 'hoja_de_vida_Sebastian_Murillo.pdf',
        image: { type: 'jpeg', quelity:1},
        html2canvas: {scale:2, useCors:true},
        jsPDF: {unit: 'mm',format:'letter',orientation:'portrait'},
        pagebreak:{mode:['css','legacy']}
    };
    html2pdf().set(opt).from(element).save();
}