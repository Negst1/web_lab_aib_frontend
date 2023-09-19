# HTTP HTTPS и их параметры

## Лабораторная работа №1

## Цель:

В текущей лабораторной работе необходимо ознакомиться с протоколами HTTP и HTTPS, используя curl, а так же особенностями установления соединения между источником и получателем.

## Список URL которые я из~~M~~учил

- [Ргупс](https://www.rgups.ru)
- [РЖД](https://www.rzd.ru/)
- [Github](https://github.com/)
- [Python](https://www.python.org/)
- [Яндекс](https://dzen.ru/)

## Значения ключей, которые будут использоваться

- I - Этот ключ указывает отправить только заголовки HTTP-ответа сервера, без тела ответа.

- L - Этот ключ указывает следовать перенаправлениям при запросе, если сервер возвращает код (301 или 302).

- k - Этот ключ отключает проверку SSL-сертификата.

## 1. РГУПС

Запрос на сайт РГУПС:

`curl -kIL rgups.com`

HTTP ответ с сайта РГУПС:

```
Date: Tue, 19 Sep 2023 10:23:50 GMT
Server: Apache
X-Powered-By: PHP/7.3.33
X-Redirect-By: WordPress
Upgrade: h2,h2c
Connection: Upgrade
Location: https://rgups.com/
Content-Type: text/html; charset=UTF-8

HTTP/1.1 200 OK
Date: Tue, 19 Sep 2023 10:23:51 GMT
Server: Apache
X-Powered-By: PHP/7.3.33
Link: <https://rgups.com/wp-json/>; rel="https://api.w.org/", <https://rgups.com
/wp-json/wp/v2/pages/1222>; rel="alternate"; type="application/json", <https://r
gups.com/>; rel=shortlink
Upgrade: h2,h2c
Connection: Upgrade
Content-Type: text/html; charset=UTF-8
```

## Разбор ответа

- Date: Tue, 19 Sep 2023 10:23:51 GMT - время и дата GET запроса.

- Server: Apache - наименование сервера, который выполняет запрос
- X-Powered-By: PHP/7.3.33 - версия РНР, обрабатывающий код
- X-Redirect-By: WordPress
- Upgrade: h2,h2c
- Connection: Upgrade
- Location: https://rgups.com/
- Content-Type: text/html; charset=UTF-8

## 2. РЖД

Запрос на сайт РЖД:

`curl -kIL https://www.rzd.ru/`

HTTP ответ с сайта РЖД

```
HTTP/1.1 403 Forbidden
Connection: close
Content-Length: 109
Content-Type: text/html
```

## Разбор ответа

- Connection: close - после завершения ответа, сервер закрывает соединения. Соответственно клиенту необходимо установить новое соединение.
- Content-Length: 109 - размер ответа в байтах.
- Content-Type: text/html - тип контента, содержащийся в ответе.

## 3. GitHub

Запрос на сайт GitHub:

`curl -kIL curl -kIL https://github.com`

HTTP ответ с сайта GitHub

```
Server: GitHub.com
Date: Tue, 19 Sep 2023 10:31:45 GMT
Content-Type: text/html; charset=utf-8
Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accep
t-Encoding, Accept, X-Requested-With
content-language: en-US
ETag: W/"1eb920f549383e5b7b1626b958efa21d"
Cache-Control: max-age=0, private, must-revalidate
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Frame-Options: deny
X-Content-Type-Options: nosniff
X-XSS-Protection: 0
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.c
om/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' upl
oads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.
com api.github.com github-cloud.s3.amazonaws.com github-production-repository-fi
le-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amaz
onaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.co
m logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.g
ithubusercontent.com productionresultssa0.blob.core.windows.net/ productionresul
tssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ product
ionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/
 productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.wind
ows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.c
ore.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.git
hubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com gi
thub-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://
alive.github.com github.githubassets.com; font-src github.githubassets.com; form
-action 'self' github.com gist.github.com objects-origin.githubusercontent.com;
frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.git
hubusercontent.com support.github.com; img-src 'self' data: github.githubassets.
com media.githubusercontent.com camo.githubusercontent.com identicons.github.com
 avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubuserc
ontent.com secured-user-images.githubusercontent.com/ user-images.githubusercont
ent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com gi
thub-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.
com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubuser
content.com; manifest-src 'self'; media-src github.com user-images.githubusercon
tent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubu
sercontent.com github.githubassets.com; script-src github.githubassets.com; styl
e-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker
-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/
Set-Cookie: _gh_sess=ji2IGKMsl8qeNrBJjv%2FhH1plFCRjAfaZQX1Bl3Bl24q%2BwljxS6QsaSi
NfizYyFB1AczlISsxD0V3U3L0UNjQ0nCmwYhGiV6yAxanJKn1phecQbnh5lVn3HSqkpZxc4KT5x3Ufmb
oQLIy44gfxbT0AvMYacn4jDVUvUHsSgMik6pDxcCMrJUeDodTYmYznMaG8iy9enaCFf7ENWfpGRHP7Bv
r5FlG8iXihr0Q8Cr9Kq516sjWv%2B1jRJgIT9eAo%2FOyMHBqj65QOJkktWwb9163LQ%3D%3D--KA4YT
BIb54yNAVI7--37QZVbrtB1bGTGcmTwhCSg%3D%3D; Path=/; HttpOnly; Secure; SameSite=La
x
Set-Cookie: _octo=GH1.1.2130310659.1695119509; Path=/; Domain=github.com; Expire
s=Thu, 19 Sep 2024 10:31:49 GMT; Secure; SameSite=Lax
Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Thu, 19 Sep 2024 10
:31:49 GMT; HttpOnly; Secure; SameSite=Lax
Accept-Ranges: bytes
X-GitHub-Request-Id: 0EF8:F77A:396466C:3A3A783:65097895
```

## Разбор ответа

- Server: GitHub.com - имя сервера, на который был отправлен запрос.
- Content-Type: text/html; charset=utf-8 тип контента ответа, в данном случае это текстовый HTML документ с кодировкой UTF-8.
- Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With - заголовки запроса, на основании которых сервер определяет, должен ли он возвращать кэшированный ответ или генерировать новый.
- content-language: en-US - язык на котором получен ответ
- ETag: W/"725535ba193e1ab9c104b6189b7aba19" - уникальный идентификатор версии ответа, который используется для кэширования.
- Cache-Control: max-age=0, private, must-revalidate - правила кэширования для клиента и прокси-серверов.
- Strict-Transport-Security: max-age=31536000; includeSubdomains; preload - политика безопасности для защищенного соединения.
- X-Frame-Options: deny - ограничение для встраивания страницы во фреймы.
- X-Content-Type-Options: nosniff - запрет преобразования типа контента сервером.
- X-XSS-Protection: 0 - отключение защиты от межсайтового скриптинга.
- Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - политика отправки заголовка Referer при переходе с других источников.
  Content-Security-Policy - политика безопасности контента.
- Set-Cookie: \_gh_sess=... - установка куки сессии для сохранения состояния пользователя.
- **_ Accept-Ranges: bytes_** - указывает на то, что сервер поддерживает диапазоны байтов при загрузке файла.
- X-GitHub-Request-Id: 50FA:0F8B:1C9A4AC1:1CFE14A7:65076ADB - уникальный идентификатор запроса на сервере GitHub.

## 4. Python

Запрос на сайт Python:

`curl -kIL https://www.python.org/`

HTTP ответ с сайта Python

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 50831
Server: nginx
Content-Type: text/html; charset=utf-8
X-Frame-Options: SAMEORIGIN
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
Accept-Ranges: bytes
Date: Tue, 19 Sep 2023 10:49:03 GMT
Age: 1432
X-Served-By: cache-iad-kiad7000025-IAD, cache-bma1669-BMA
X-Cache: HIT, HIT
X-Cache-Hits: 16, 6
X-Timer: S1695120543.199149,VS0,VE0
Vary: Cookie
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

```

## 5. Яндекс

Запрос на сайт Dzen:

`curl -kIL https://dzen.ru
`

HTTP запрос с сайта Dzen:

```
HTTP/1.1 200 Ok
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.y
andex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net ma
tchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex
.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.ver
ify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com
ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-he
aders.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yande
x.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.k
g mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm
mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29
009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yande
x.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.ya
ndex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yand
ex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeni
nfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *
.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzen
infra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.r
u notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.r
u dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubl
everify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.n
et *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src aw
aps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex
.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.d
zen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yande
x.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru st
atic.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsm
ail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.do
ubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net a
n.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns
-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.
frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com a
d.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yande
x.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru
 px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adloo
xtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarge
t.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-s
i.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.b
y mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.
tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv
 mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.or
g *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yande
x.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.
dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.
ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.
ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.
net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-s
ys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consent
manager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.co
m *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.y
andex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banne
rs.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler
-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.ne
t *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninf
ra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru
 *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net
; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net m
c.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.m
oatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-ch
eck-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc
.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.ya
ndex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yand
ex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yand
ex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net
*.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking
.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com
*.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.c
om *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banne
rs.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru h
ttp-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.co
m dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.
me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tu
nneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra
.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.v
kuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.r
u/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_ol
d&project=zen&yandex_login=&yandexuid=1161508301695120627&requestid=2889912409.1
40.1695120627440.87545&page=site_desktop;
Content-Type: text/html; charset=utf-8
Set-Cookie: _yasc=p2rHghjwC/A+coBybs3ZnO/2ofJU5iSjUSjx3SBZLQb37Xg+1vbkloD8mpVQ09
8qdw==; domain=.dzen.ru; path=/; expires=Fri, 16 Sep 2033 10:50:27 GMT; secure
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Requestid: 2889912409.140.1695120627440.87545
X-XSS-Protection: 1; mode=block
X-Yandex-Req-Id: 1695120627408952-514770104329180541100122-production-app-host-v
lx-zen-304

```
