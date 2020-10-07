import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <StaticQuery
      query={graphql`
        query AllPagesQuery {
          allMdx {
            edges {
              node {
                fields {
                  route
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
            <h1>Naoki Ohashi</h1>
            <h2>作ったもの</h2>
            <ul>
              <li><a href="https://ja.wordpress.org/plugins/wp-simple-spreadsheet-fetcher-for-google/">WP Simple Spreadsheet Fetcher for Google</a> Googleスプレッドシートのデータを、WordPress上でリアルタイムに表示するプラグイン。 </li>
            </ul>
            <h2>OSS</h2>
            <ul>
              <li><a href="https://wordpress.org/news/2019/05/jaco/">WordPress 5.2</a> Contributor</li>
              <li><a href="https://wordpress.org/news/2019/02/betty/">WordPress 5.1</a> Contributor</li>
            </ul>
            <h2>登壇</h2>
            <ul>
              <li><a href="https://www.meetup.com/ja-JP/Mie-WordPress-Meetup/events/271181852/">自社プロダクト「前チケ」 を開発して分かったこと</a>@Mie WordPress Meetup</li>
            </ul>
            <h2>執筆</h2>
            <ul>
              <li><a href="https://sorabatake.jp/12087/">富士山が見える場所はどこまで？標高データから解析！【Tellusでやってみた編】</a> 日本発の衛星データプラットフォームTellusを使い、富士山からの可視領域を調べる。</li>
              <li><a href="https://sorabatake.jp/12928/">地球の丸さを考慮して、2地点間の可視性を考えてみた</a> 富士山の可視領域を地球の曲率を含めて計算。</li>
            </ul>
            <h2>コミュニティ</h2>
            <ul>
              <li><a href="https://space-apps-kushimoto.github.io/">NASA International Space Apps Challenge in Kushimoto</a> 2020年 実行委員長</li>
            </ul>
            <h2>連絡先</h2>
            <ul>
              <li><a href="https://twitter.com/naogify">Twitter</a></li>
              <li><a href="https://github.com/naogify">GitHub</a></li>
              <li><a href="https://qiita.com/naogify">Qiita</a></li>
            </ul>
            <h2>最新の記事</h2>
            <div>
              {data.allMdx.edges.map((edge, index) => {
                const {
                  node: {
                    fields: { route },
                    frontmatter: { title },
                  },
                } = edge

                return (
                  <div key={index}>
                    <Link to={route}>{title}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }}
    />
  )
}
