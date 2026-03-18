# 👥 Team Management MOC

> Central hub for managing team members, their development, and organizational relationships.

## 🎯 Quick Navigation

### Core Functions
- [[#Team Directory]] - All team members at a glance
- [[#Development Tracking]] - Career paths and growth
- [[#Performance Management]] - Reviews, goals, and feedback
- [[#Communication Hub]] - One-on-ones, notes, and preferences

### Quick Actions
- 🆕 **Add Team Member**: `Ctrl/Cmd + P` → "Quick Add Team Member"
- 📞 **Schedule 1:1**: [[Resources/Templates/Team Member/Team Member One on One Section Template]]
- 🎯 **Add Highlight**: [[Resources/Templates/callouts/Highlight Callout Template]]
- 📝 **Professional Note**: [[Resources/Templates/callouts/Professional Note Callout Template]]

## 📊 Team Overview Dashboard

### Active Team Members
```dataview
TABLE WITHOUT ID
  file.link as "Team Member",
  choice(contains(file.name, "Manager"), "👔 Manager", choice(contains(file.name, "Senior"), "🎯 Senior", choice(contains(file.name, "Lead"), "🚀 Lead", "👤 Member"))) as "Role",
  file.ctime as "Added"
FROM "Areas/Team-Management/Team"
WHERE file.name != "_about_"
SORT file.ctime DESC
```

### Recent Team Activity
```dataview
TABLE WITHOUT ID
  file.link as "Activity",
  file.mtime as "Last Updated"
FROM "Areas/Team-Management/Team"
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 10
```

## 🏗️ Team Structure

### Team Directory
**Location**: `Areas/Team-Management/Team/`

Each team member has their own folder containing:
- 📄 **Profile Home** - Main overview and dashboard
- 🎯 **Career Path** - Development goals and progression
- 📞 **Communication Preferences** - How they like to work
- 📧 **Contact Info** - All contact details
- 📝 **One-on-One Notes** - Meeting history and follow-ups
- 🔄 **Stay Interview** - Retention and satisfaction tracking
- 📅 **Year in Review** - Annual performance documentation

### Team Member Template Structure
```
Team Member Name/
├── Team Member Name.md              # Main profile
├── Team Member Name - Career Path.md
├── Team Member Name - Communication Preferences.md  
├── Team Member Name - Contact Info.md
├── Team Member Name - One on One.md
├── Team Member Name - Stay Interview.md
└── Team Member Name - Year In Review.md
```

## 📈 Development Tracking

### Career Development
- **Career Paths**: [[Resources/Templates/Team Member/Team Member Career Path Note Template]]
- **Skill Development**: [[Areas/Professional-Development/Skills-Development/]]
- **Performance Reviews**: [[Areas/Professional-Development/Performance-Reviews/]]
- **Talent Development**: [[Resources/Templates/callouts/Talent Development Callout Template]]

### Development Resources
```dataview
LIST
FROM "Areas/Professional-Development"
WHERE file.name != "_about_"
SORT file.name ASC
```

## 🎯 Performance Management

### Review Cycles
- **One-on-Ones**: Weekly/bi-weekly check-ins
- **Stay Interviews**: Quarterly retention conversations  
- **Year in Review**: Annual comprehensive evaluation
- **Career Planning**: Ongoing development discussions

### Performance Templates
- [[Resources/Templates/dataview/One on Ones Dataview Template]]
- [[Resources/Templates/Team Member/Team Member Stay Interview Note Template]]
- [[Resources/Templates/Team Member/Team Member Year In Review Note Template]]

## 💬 Communication Hub

### Note Types
- 🌟 **Highlights** - Achievements and successes
- 🎯 **Challenges** - Issues and obstacles
- 🚀 **Demos** - Presentations and showcases
- 📞 **Follow-ups** - Action items and next steps
- 👤 **Personal Notes** - Individual observations
- 💼 **Professional Notes** - Work-related documentation

### Communication Templates
| Type | Template | Use Case |
|------|----------|----------|
| Highlight | [[Resources/Templates/callouts/Highlight Callout Template]] | Celebrating wins |
| Challenge | [[Resources/Templates/callouts/Challenge Callout Template]] | Addressing issues |
| Demo | [[Resources/Templates/callouts/Demo Callout Template]] | Showcasing work |
| Follow-up | [[Resources/Templates/callouts/Follow-up Callout Template]] | Action tracking |
| Personal | [[Resources/Templates/callouts/Personal Note Callout Template]] | Individual insights |
| Professional | [[Resources/Templates/callouts/Professional Note Callout Template]] | Work documentation |

## 📊 Team Analytics

### Team Highlights This Month
```dataview
LIST
FROM "Areas/Team-Management/Team"
WHERE contains(file.content, "highlight") AND file.mtime >= date(today) - dur(30 days)
SORT file.mtime DESC
LIMIT 5
```

### Upcoming One-on-Ones
```dataview
TABLE WITHOUT ID
  split(file.name, " - ")[0] as "Team Member",
  file.mtime as "Last 1:1"
FROM "Areas/Team-Management/Team"
WHERE contains(file.name, "One on One")
SORT file.mtime ASC
LIMIT 5
```

### Team Challenges to Address
```dataview
LIST
FROM "Areas/Team-Management/Team"
WHERE contains(file.content, "challenge") AND file.mtime >= date(today) - dur(14 days)
SORT file.mtime DESC
LIMIT 3
```

## 🚀 Team Workflows

### New Team Member Onboarding
1. **Create Profile**: Use QuickAdd → "Team Member"
2. **Initial Setup**: Complete all template sections
3. **First Meeting**: Schedule welcome one-on-one
4. **Documentation**: Add to team directory
5. **Integration**: Connect to relevant projects/areas

### Regular Team Management
1. **Weekly Reviews**: Check team member updates
2. **One-on-One Prep**: Review previous notes and goals
3. **Performance Tracking**: Update career paths and achievements
4. **Team Health**: Monitor challenges and satisfaction
5. **Development Planning**: Guide growth conversations

### Performance Review Cycle
1. **Preparation Phase**: Gather evidence and feedback
2. **Self-Assessment**: Team member completes evaluation
3. **Manager Review**: Complete formal assessment
4. **Goal Setting**: Establish next period objectives
5. **Documentation**: Update career path and development plan

## 🔗 Related Resources

### Templates
- [[50 - Templates MOC#Team Member Templates]] - All team member templates
- [[50 - Templates MOC#Callout Templates]] - Communication note templates
- [[50 - Templates MOC#Dataview Templates]] - Dynamic content views

### Automation
- [[60 - Automation MOC#Team Member Scripts]] - Automated workflows
- [[Resources/quickadd/scripts/teamnamequickadd.js]] - Team member creation
- [[Resources/scripts/team_member_selection.js]] - Selection utilities

### Areas
- [[Areas/Professional-Development/]] - Development resources
- [[Areas/Technical-Excellence/]] - Technical growth
- [[Areas/Communities-of-Practice/]] - Knowledge sharing

---

**🎯 Management Tips**: 
- Use callouts consistently for better organization
- Schedule regular one-on-ones in your calendar
- Update career paths after each performance discussion
- Archive completed development goals

*Connected to: [[00 - Master MOC]] | [[50 - Templates MOC]] | [[60 - Automation MOC]]*
