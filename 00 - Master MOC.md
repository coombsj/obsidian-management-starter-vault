# 🗺️ Master MOC - Obsidian Management Starter Vault

> Your central navigation hub for team management, development, and organizational excellence.

## 🎯 Quick Access

### 📊 Core Management Areas
- [[10 - Team Management MOC]] - Team member profiles, development, and tracking
- [[20 - Projects MOC]] - Active projects, planning, and completion tracking
- [[30 - Areas MOC]] - Life and work areas management
- [[40 - Journal MOC]] - Daily notes, reflection, and progress tracking

### 🛠️ System & Tools
- [[50 - Templates MOC]] - All templates for rapid content creation
- [[60 - Automation MOC]] - Scripts, workflows, and automated processes
- [[70 - Resources MOC]] - Tools, references, and utilities

## 🚀 Getting Started

### For New Users
1. Start with [[Home]] - Your daily dashboard
2. Review [[README]] - Project overview and setup
3. Explore [[10 - Team Management MOC]] - Core functionality
4. Set up your first team member using [[50 - Templates MOC]]

### Quick Actions
- 📝 Create new team member profile → Use QuickAdd (Ctrl/Cmd + P → "Quick Add")
- 📅 Create daily note → [[Resources/Templates/periodic/Daily Note Template]]
- 🎯 Add team highlight → [[Resources/Templates/callouts/Highlight Callout Template]]
- 📞 Schedule one-on-one → [[Resources/Templates/Team Member/Team Member One on One Section Template]]

## 📈 Management Dashboard

### Team Overview
```dataview
TABLE 
  file.ctime as "Added",
  length(file.outlinks) as "Connections"
FROM "Areas/Team-Management/Team"
WHERE contains(file.name, " - ")
SORT file.ctime DESC
LIMIT 5
```

### Recent Activity
```dataview
TABLE file.mtime as "Last Modified"
FROM "Areas/Journal/Daily Notes"
SORT file.mtime DESC
LIMIT 3
```

## 🎨 System Architecture

### Content Organization
```
📁 Areas/                    ← [[30 - Areas MOC]]
├── 👥 Team-Management/      ← [[10 - Team Management MOC]]
├── 📊 Professional-Development/
├── 🏢 Communities-of-Practice/
└── 📝 Journal/              ← [[40 - Journal MOC]]

📁 Projects/                 ← [[20 - Projects MOC]]
├── 🔥 Active-Projects/
├── 💡 Ideas-and-Innovation/
└── ✅ Completed-Projects/

📁 Resources/                ← [[70 - Resources MOC]]
├── 📄 Templates/            ← [[50 - Templates MOC]]
├── 🤖 Scripts/              ← [[60 - Automation MOC]]
└── 📚 References/
```

## 🎯 Key Workflows

### Team Member Management
1. **Onboarding**: [[50 - Templates MOC#Team Member Templates]]
2. **Development**: [[Areas/Professional-Development/]]
3. **Performance**: [[Resources/Templates/dataview/One on Ones Dataview Template]]
4. **Career Growth**: [[Resources/Templates/Team Member/Team Member Career Path Note Template]]

### Content Creation
1. **Daily Planning**: [[40 - Journal MOC#Daily Notes]]
2. **Team Notes**: [[10 - Team Management MOC#Note Types]]
3. **Project Tracking**: [[20 - Projects MOC#Project Templates]]
4. **Resource Documentation**: [[70 - Resources MOC#Documentation]]

## 🔧 Maintenance & Updates

### Regular Tasks
- [ ] Weekly team member check-ins
- [ ] Monthly template review and updates
- [ ] Quarterly system optimization
- [ ] Annual archive and cleanup

### System Health
- **Last System Review**: `= date(now)`
- **Template Count**: `= length(filter(file.lists.L.text, (item) => contains(item, "Template")))`
- **Team Members**: `= length(filter(file.folders, (folder) => contains(folder, "Team-Management")))`

## 📱 Mobile Quick Access

### Essential Links
- [[Home]] - Daily dashboard
- [[Areas/Journal/Daily Notes/]] - Today's focus
- [[Areas/Team-Management/Team/]] - Team directory
- [[Projects/Active-Projects/]] - Current work

---

**💡 Pro Tip**: Use `Ctrl/Cmd + O` to quickly open any MOC, or `Ctrl/Cmd + Shift + F` to search across all content.

*Last Updated: `= date(now)`*
