//
//  widgetDolar.swift
//  widgetDolar
//
//  Created by Mauricio Gallego on 01/12/2022.
//

import WidgetKit
import SwiftUI


struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), displayText: "Placeholder")
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(),displayText: "Data goes here")
        completion(entry)
    }

    struct WidgetData: Decodable {
      var displayText: String
    }
  
  func getTimeline(in context: Context, completion: @escaping (Timeline<SimpleEntry>) -> Void) {
      let entryDate = Date()
      
      let userDefaults = UserDefaults.init(suiteName: "group.dolar")
      if userDefaults != nil {
          if let savedData = userDefaults!.value(forKey: "savedData") as? String {
          let decoder = JSONDecoder()
          let data = savedData.data(using: .utf8)
          
          if let parsedData = try? decoder.decode(WidgetData.self, from: data!) {
              let nextRefresh = Calendar.current.date(byAdding: .minute, value: 5, to: entryDate)!
              let entry = SimpleEntry(date: nextRefresh, displayText: parsedData.displayText)
              let timeline = Timeline(entries: [entry], policy: .atEnd)
              
              completion(timeline)
          } else {
              print("Could not parse data")
          }
          
          } else {
              let nextRefresh = Calendar.current.date(byAdding: .minute, value: 5, to: entryDate)!
              let entry = SimpleEntry(date: nextRefresh, displayText: "No data set")
              let timeline = Timeline(entries: [entry], policy: .atEnd)
              
              completion(timeline)
          }
      }
  }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let displayText: String
}

struct widgetDolarEntryView : View {
    var entry: Provider.Entry
  
    var body: some View {
      VStack {
        HStack{
          Text(entry.displayText)
            .foregroundColor(Color.green)
          Spacer()
          Text(entry.displayText)
            .foregroundColor(Color.green)
        }.padding()
        HStack{
          Text(entry.displayText)
            .foregroundColor(Color.green)
          Spacer()
          Text(entry.displayText)
            .foregroundColor(Color.green)
        }.padding()
        HStack{
          Text(entry.displayText)
            .foregroundColor(Color.green)
          Spacer()
          Text(entry.displayText)
            .foregroundColor(Color.green)
        }.padding()
      }
    }
}

struct widgetDolar: Widget {
    let kind: String = "widgetDolar"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            widgetDolarEntryView(entry: entry)
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}

struct widgetDolar_Previews: PreviewProvider {
    static var previews: some View {
        widgetDolarEntryView(entry: SimpleEntry(date: Date(), displayText: "algo"))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
