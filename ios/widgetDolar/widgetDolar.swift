//
//  widgetDolar.swift
//  widgetDolar
//
//  Created by Mauricio Gallego on 01/12/2022.
//

import WidgetKit
import SwiftUI

class Prices {
  let name: String
  let price: String
  
  init(name: String, price: String){
    self.name = name
    self.price = price
  }
}

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> InfoEntry {
      InfoEntry(date: Date(), prices: [])
    }

    func getSnapshot(in context: Context, completion: @escaping (InfoEntry) -> ()) {
        let entry = InfoEntry(date: Date(),prices: [])
        completion(entry)
    }

    struct WidgetData: Decodable {
      var displayText: String
    }
  
  func getTimeline(in context: Context, completion: @escaping (Timeline<InfoEntry>) -> Void) {
    
    var entries: [InfoEntry] = []
    
    completion(Timeline(entries: entries, policy: .atEnd))
  }
}

struct InfoEntry: TimelineEntry {
  let date: Date
  var prices: [Prices]
}

struct widgetDolarEntryView : View {
  var primaryColor = Color(red: 7/255, green: 154/255, blue: 125/255)
  var entry: Provider.Entry
  
    var body: some View {
      VStack {
          HStack{
            Text("Oficial")
              .foregroundColor(primaryColor)
              .bold()
              .font(.system(size: 19))
            Spacer()
            Text("315")
              .foregroundColor(.black)
              .bold()
              .font(.system(size: 14))
          }.padding(.horizontal)
        Divider()
        Spacer()
        HStack{
          Text("Blue")
            .foregroundColor(primaryColor)
            .bold()
            .font(.system(size: 19))
          Spacer()
          Text("300")
            .foregroundColor(.black)
            .bold()
            .font(.system(size: 14))
        }.padding(.horizontal)
        Divider()
        Spacer()
        HStack{
          Text("310")
            .foregroundColor(primaryColor)
            .bold()
            .font(.system(size: 19))
          Spacer()
          Text("310")
            .foregroundColor(.black)
            .bold()
            .font(.system(size: 14))
        }.padding(.horizontal)
      }.padding(.vertical, 20)
    }
}

struct widgetDolar: Widget {
    let kind: String = "widgetDolar"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            widgetDolarEntryView(entry: entry)
        }
        .configurationDisplayName("Dolar hoy")
        .supportedFamilies([.systemSmall])
    }
}

struct widgetDolar_Previews: PreviewProvider {
    static var previews: some View {
      widgetDolarEntryView(entry: InfoEntry(date: Date(), prices: []))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
