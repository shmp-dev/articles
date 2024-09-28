# WebAPI に HTTPリクエストを送信する ~ curl編 ~

## はじめに
本記事では、WebAPIに対して実際にHTTPリクエストを送信し、レスポンスを受け取るまでの流れを確認します。
HTTPリクエストを送信するための最も簡単な方法の一つである、curlコマンドを使用します。

## curl とは
> cURL（カール）は、さまざまなプロトコルを用いてデータを転送するライブラリとコマンドラインツールを提供するプロジェクトである。
> [cURL - Wikipedia](https://ja.wikipedia.org/wiki/CURL)

簡単に説明すると、コマンドラインからURLを指定してデータを取得・送信できるツールです。
例えば、コマンドプロンプトを起動し、以下のように`curl`コマンドに続けてURLを指定すると、ウェブ上のデータを取得することができます。

`curl https://example.com`

`curl`コマンドにはさまざまなオプションが用意されており、以下に主なオプションを記載します。

| オプション        | 説明                                               | 使用例                                                         |
| ----------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| `-o [ファイル名]` | 指定した名前でデータをファイルに保存します         | `curl -o index.html https://example.com`                       |
| `-O`              | URLの元のファイル名でデータを保存します            | `curl -O https://example.com/index.html`                       |
| `-I`              | ヘッダー情報のみを表示します                       | `curl -I https://example.com`                                  |
| `-v`              | 詳細なリクエストおよびレスポンス情報を表示します   | `curl -v https://example.com`                                  |
| `-X [メソッド]`   | HTTPメソッドを指定します（例：GET、POST、PUTなど） | `curl -X POST https://example.com`                             |
| `-d [データ]`     | POSTリクエストで送信するデータを指定します         | `curl -d "param1=value1&param2=value2" https://example.com`    |
| `-H [ヘッダー]`   | HTTPリクエストヘッダーを指定します                 | `curl -H "Content-Type: application/json" https://example.com` |

## WebAPI に curl コマンドでリクエスト

今回は、天気予報サービス「OpenWeather」が提供する無料のAPIのうち、「Current weather data」を使用し、現在の天気データを取得します。
この記事ではHTTPリクエストの送信に焦点を当てているため、APIの詳細については公式サイトをご確認ください。
[Current weather data - OpenWeatherMap](https://openweathermap.org/current)
※APIの利用にはアカウント登録を行いAPIキーを発行する必要があります。

### コマンドを実行する
ターミナル(コマンドプロンプト)から、以下のコマンドを実行します。

`curl -v 'https://api.openweathermap.org/data/2.5/weather?q=tokyo&lang=ja&appid={APIキー}'`

▼実行結果
```
* Host api.openweathermap.org:443 was resolved.
* IPv6: (none)
* IPv4: 146.190.90.70
*   Trying 146.190.90.70:443...
* Connected to api.openweathermap.org (146.190.90.70) port 443
* ALPN: curl offers h2,http/1.1
* (304) (OUT), TLS handshake, Client hello (1):
*  CAfile: /etc/ssl/cert.pem
*  CApath: none
* (304) (IN), TLS handshake, Server hello (2):
* (304) (IN), TLS handshake, Unknown (8):
* (304) (IN), TLS handshake, Certificate (11):
* (304) (IN), TLS handshake, CERT verify (15):
* (304) (IN), TLS handshake, Finished (20):
* (304) (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384 / [blank] / UNDEF
* ALPN: server accepted http/1.1
* Server certificate:
*  subject: CN=*.openweathermap.org
*  start date: Jul 19 00:00:00 2024 GMT
*  expire date: Mar 21 23:59:59 2025 GMT
*  subjectAltName: host "api.openweathermap.org" matched cert's "*.openweathermap.org"
*  issuer: C=GB; ST=Greater Manchester; L=Salford; O=Sectigo Limited; CN=Sectigo RSA Domain Validation Secure Server CA
*  SSL certificate verify ok.
* using HTTP/1.x
> GET /data/2.5/weather?q=tokyo&lang=ja&appid={APIキー} HTTP/1.1
> Host: api.openweathermap.org
> User-Agent: curl/8.7.1
> Accept: */*
> 
* Request completely sent off
< HTTP/1.1 200 OK
< Server: openresty
< Date: Mon, 23 Sep 2024 07:01:23 GMT
< Content-Type: application/json; charset=utf-8
< Content-Length: 505
< Connection: keep-alive
< X-Cache-Key: /data/2.5/weather?lang=ja&q=tokyo
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Methods: GET, POST
< 
* Connection #0 to host api.openweathermap.org left intact
{"coord":{"lon":139.6917,"lat":35.6895},"weather":[{"id":802,"main":"Clouds","description":"雲","icon":"03d"}],"base":"stations","main":{"temp":298.68,"feels_like":298.91,"temp_min":297.94,"temp_max":299.15,"pressure":1013,"humidity":62,"sea_level":1013,"grnd_level":1008},"visibility":10000,"wind":{"speed":9.77,"deg":60},"clouds":{"all":40},"dt":1727074026,"sys":{"type":2,"id":2001249,"country":"JP","sunrise":1727036989,"sunset":1727080649},"timezone":32400,"id":1850144,"name":"東京都","cod":200}%      
```

### 実行結果の説明

上記の`curl`コマンドの実行結果について、以下に簡単に説明します。

●行頭の文字について
- `*`：curlの内部動作や進行状況を示す。
- `>`：サーバーに送信したHTTPリクエストを示す。
- `<`：サーバーから受信したHTTPレスポンスを示す。

1. **HTTPリクエストの送信**:
   ```
   > GET /data/2.5/weather?q=tokyo&lang=ja&appid={APIキー} HTTP/1.1
   > Host: api.openweathermap.org
   > User-Agent: curl/8.7.1
   > Accept: */*
   ```
   `GET`メソッドを使用して天気データを取得するリクエストが、APIサーバーに送信されています。
   ホストは`api.openweathermap.org`, パスは`/data/2.5/weather?q=tokyo&lang=ja&appid={APIキー}`です。
   （これにスキーム`https://`を加えると、URLと一致することがわかります）

   パスの`?`以降の部分がクエリです。
   クエリパラメータとして、`q=tokyo`（東京の天気情報）、`lang=ja`（日本語のレスポンス）、および`appid`（APIキー）を指定しています。

2. **HTTPレスポンスの受信**:
   ```
   < HTTP/1.1 200 OK
   < Server: openresty
   < Date: Mon, 23 Sep 2024 07:01:23 GMT
   < Content-Type: application/json; charset=utf-8
   < Content-Length: 505
   < Connection: keep-alive
   ```
   サーバーからのレスポンスが正常（HTTPステータスコード `200 OK`）であることが確認できます。
   また、レスポンスの形式はJSONであり、データの長さは505バイトであることがわかります。

3. **レスポンスボディ（天気データ）**:
   ```json
   {
      "coord": {"lon": 139.6917, "lat": 35.6895},
      "weather": [{"id": 802, "main": "Clouds", "description": "雲", "icon": "03d"}],
      "main": {"temp": 298.68, "feels_like": 298.91, "temp_min": 297.94, "temp_max": 299.15, "pressure": 1013, "humidity": 62},
      "wind": {"speed": 9.77, "deg": 60},
      "clouds": {"all": 40},
      "dt": 1727074026,
      "sys": {"country": "JP", "sunrise": 1727036989, "sunset": 1727080649},
      "timezone": 32400,
      "name": "東京都",
      "cod": 200
   }
   ```
   レスポンスボディには、東京の現在の天気情報がJSON形式で含まれています。
   
   主な情報として以下が含まれます:
   - **位置情報**（`coord`）：経度139.6917、緯度35.6895（東京都の位置）。
   - **天候情報**（`weather`）：雲があること（`description: "雲"`）。
   - **気温情報**（`main`）：現在の気温は298.68K（摂氏約25.5°C）、湿度は62%。
   - **風情報**（`wind`）：風速は9.77m/s、風向きは60度。
   - **地域情報**（`sys`）：国コード`JP`（日本）、日の出と日の入りの時間（Unixタイムスタンプ）。

このように、`curl`を使用してWebAPIに対するHTTPリクエストを送信し、サーバーからのレスポンスを確認することができます。

実際の開発では、以降の工程でレスポンスとして返ってきたJSONデータを加工し、自身のサービスで使用することになります。
