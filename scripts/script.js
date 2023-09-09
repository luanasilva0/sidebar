// Selecionando o botão do menu e adicionando um evento à ele
const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);

// Selecionando menu de navegação
const navMenu = document.querySelector("nav");

// Selecinando elementos da header no menu de navegação
const header = document.querySelector("header");
const logoImage = document.querySelector(".logo");
const parentElementLogo = logoImage.parentElement;
const nextSibilingLogo = logoImage.nextSibling;


const textListMenu = document.querySelectorAll(".menuOption");

const originalText = [
    "Buscar", 
    "Dashboard", 
    "Pets", 
    "Cliente", 
    "Vets", 
    "Ajustes"
];

// Selecionando elementos do footer do menu de navegação
const footer = document.querySelector("footer");
const userInfo = document.querySelector(".user");
const parentElementUserInfo = userInfo.parentElement;
const nextSibilingUserInfo = userInfo.nextSibling;

// Função para recolher e expandir o menu da página
function toggleMenu() {
    if (navMenu.style.width === "4.875rem") {
        navMenu.style.width = "15.625rem"
        header.style.justifyContent = "space-between"
        footer.style.justifyContent = "space-between"
        textListMenu.forEach((textListMenu, index) => {
            textListMenu.innerHTML = originalText[index]
        });

        addingElements();

    } else {
        navMenu.style.width = "4.875rem"
        header.style.justifyContent = "space-around"
        footer.style.justifyContent = "space-around"
        textListMenu.forEach(textListMenu => {
            textListMenu.innerHTML = ""
        });

        removeElements();
    }
}

// Função para adicionar elementos de volta ao HTML
function addingElements() {
    if (!document.body.contains(logoImage, userInfo) && (nextSibilingLogo, nextSibilingUserInfo)) {
        parentElementLogo.insertBefore(logoImage, nextSibilingLogo)
        parentElementUserInfo.insertBefore(userInfo, nextSibilingUserInfo)
    } else {
        parentElementLogo.appendChild(logoImage)
        parentElementUserInfo.appendChild(userInfo)
    }
}

// Função para remover elementos do HTML 
function removeElements() {
    if (document.body.contains(logoImage, userInfo)) {
        logoImage.remove()
        userInfo.remove()
    }
}