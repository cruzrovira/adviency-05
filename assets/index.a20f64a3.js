import {
  e as p,
  v as c,
  r as d,
  j as r,
  F as u,
  a as f,
  V as h,
  H as b,
  I as y,
  B as m,
  T as v,
  R as S,
  b as x,
  C as w,
} from "./vendor.87cd323c.js"
const C = function () {
  const n = document.createElement("link").relList

  if (n && n.supports && n.supports("modulepreload")) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
  }).observe(document, {childList: !0, subtree: !0})
  function s(e) {
    const t = {}

    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    )
  }
  function i(e) {
    if (e.ep) return
    e.ep = !0
    const t = s(e)

    fetch(e.href, t)
  }
}

C()
var R = "./assets/bg.6808d548.jpg",
  k = p({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${R})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          w: "100%",
          minH: "100vh",
          fontSize: "16px",
        },
      },
    },
  })
const j = [
  {id: c(), name: "Medias "},
  {id: c(), name: "caramelos"},
  {id: c(), name: "Vitel Tone"},
]

function I() {
  const [a, n] = d.exports.useState([]),
    [s, i] = d.exports.useState("")

  d.exports.useEffect(() => {
    n(j)
  }, [])
  const e = (o) => {
      o.preventDefault(), s.trim() !== "" && n([...a, {id: c(), name: s}]), i("")
    },
    t = (o) => {
      n(a.filter((g) => g.id !== o))
    },
    l = () => {
      n([])
    }

  return r(u, {
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
    w: "100%",
    children: f(h, {
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "30%",
      children: [
        r(b, {fontFamily: "'Mountains of Christmas'", children: "Regalos:"}),
        f(u, {
          as: "form",
          gap: 2,
          onSubmit: e,
          children: [
            r(y, {placeholder: "Regalo", value: s, onChange: (o) => i(o.target.value)}),
            r(m, {colorScheme: "red", type: "submit", children: "Agregar"}),
          ],
        }),
        r(h, {
          w: "100%",
          children: a.map((o) =>
            f(
              u,
              {
                justifyContent: "space-between",
                w: "100%",
                children: [
                  r(v, {children: o.name}),
                  r(m, {colorScheme: "red", size: "xs", onClick: () => t(o.id), children: "x"}),
                ],
              },
              o.id,
            ),
          ),
        }),
        a.length !== 0 &&
          r(m, {colorScheme: "red", w: "100%", onClick: l, children: "Borrar todo"}),
      ],
    }),
  })
}
S.render(
  r(x.StrictMode, {children: r(w, {theme: k, children: r(I, {})})}),
  document.getElementById("root"),
)
