'use client'
import { useState } from "react"
import { ResultsType } from "@/typeings/types"

export default function ProjectContent({results}: {results: ResultsType}){
  
  return (
    <div className="blog-page-markdown">
      <div>
        <h3><strong>Description</strong></h3>
            <div>
              <div>
                  <div>
                    {results.description[0].split("|").map((paragragh: string, index: number) => { // "|" represents the end of a paragraph in the json description string
                          return (
                            <p key={index}>{paragragh}</p>
                          )
                        })
                        }
                      </div>
                  </div>
                </div>
            </div>
            <div>
            <h3><strong>Features</strong></h3>
              <ul>
              {results.features.map((item: any, index: number) => {
                return (
                  <div className="item-project-feature" key={index}>
                    <li>
                      {item.title}
                      <p>{item.description}</p>
                    </li>
                  </div>
                )
              })}
              </ul>
            </div>
    </div>
  )
}