import baidu from "./lib/baidu"
import google from "./lib/google"
import bing from "./lib/bing"
import sogou from "./lib/sougou"
import on from "./lib/on"

const changeImg = document.querySelector('.changeImg')
const searchClass = document.querySelector('.searchClass')
const searchUl = document.querySelector('.searchUl')
const others = document.querySelector('.others')
const search = document.querySelector('#search')
const changeSearch = document.querySelector('.changeSearch')
let string
const objWeb = {
  baidu,
  google,
  bing,
  sogou
}
let names = objWeb.baidu
let url = 'https://www.baidu.com/s?tn=02003390_42_hao_pg&ie=utf-8&wd='
let angle = 20

//更换壁纸
let imgN = JSON.parse(window.localStorage.getItem("imgN"));
let n = imgN || 0;
changeImg.addEventListener('click', () => {
  n += 1
  angle += 20
  changeImg.style.transform = `rotate(${angle}deg)`
  // document.body.style.background = `no-repeat url(https://bing.mcloc.cn/api?day=${n})`;
  window.localStorage.setItem("imgN", n);
})

//  阻止默认事件
changeSearch.addEventListener('click', (e) => {
  e.preventDefault()
})

// 开关搜索选择框
on('click', document.body, '.changeSearch', (t) => {
  if (t) {
    if (others.classList.length === 1) {
      others.classList.add('active')
    } else {
      others.classList.remove('active')
    }
  } else {
    others.classList.remove('active')
  }
})

// 切换搜索引擎
on('click', others, 'li', (t) => {
  for (let key in objWeb) {
    if (key === t.className) {
      const svgName = t.className
      const svgNode = `
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-${svgName}"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-f111"></use>
      </svg>`
      const li = `
      <li class="kindMap">地图</li>`
      const template = document.createElement('template')
      template.innerHTML = svgNode.trim()
      changeSearch.innerHTML = ''
      changeSearch.appendChild(template.content)
      names = objWeb[key]
      const list = searchUl.childNodes
      const kindMap = document.querySelector('.kindMap')
      if (key === 'sogou') {
        const kindMap = document.querySelector('.kindMap')
        searchUl.removeChild(kindMap)
      } else if (kindMap) {
      } else {
        const template = document.createElement('template')
        template.innerHTML = li.trim()
        searchUl.appendChild(template.content.firstChild)
      }
      for (let i = 0; i < list.length; i++) {
        if (list[i].nodeType === 1) {
          if (list[i].classList[0] === 'kindWeb') {
            list[i].classList.add('active')
          } else {
            list[i].classList.remove('active')
          }
        }
      }
      for (let key in names) {
        key === '.kindWeb' ? url = names[key] : ''
      }
      return
    }
  }
})

// 切换搜索类
on('click', searchClass, names, (t, key) => {
  if (t) {
    url = names[key]
    t.classList.add('active')
  } else {
    let node = document.querySelector(`${key}`)
    node.classList.remove('active')
  }
})

// 获取输入内容
search.addEventListener('input', (e) => {
  string = e.target.value
})

// 按下搜索
search.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if(string){
      window.open(`${url}${string}`)
    }else {
      window.open(`${url}`)
    }
  }
})





