# 📄 Templates MOC

> Comprehensive template library for rapid content creation, standardized documentation, and consistent workflows.

## 🎯 Quick Navigation

### Template Categories
- [[#Team Member Templates]] - Individual profiles and development
- [[#Callout Templates]] - Structured content blocks
- [[#Dataview Templates]] - Dynamic content aggregation
- [[#Periodic Templates]] - Time-based notes and reviews
- [[#Project Templates]] - Project management and tracking

### Quick Actions
- 🆕 **Use Template**: Apply template to new note
- 📋 **Template Library**: Browse all available templates
- 🔄 **Template Update**: Modify existing templates
- 📊 **Template Usage**: Track template utilization

## 📈 Template Dashboard

### Template Usage Statistics
```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[2] as "Category",
  length(file.lists) as "Elements",
  file.mtime as "Last Updated"
FROM "Resources/Templates"
WHERE file.name != "_about_"
SORT file.mtime DESC
LIMIT 10
```

### Recently Updated Templates
```dataview
TABLE WITHOUT ID
  file.link as "Template",
  split(file.folder, "/")[2] as "Category",
  file.mtime as "Updated"
FROM "Resources/Templates"
WHERE file.mtime >= date(today) - dur(30 days)
SORT file.mtime DESC
```

### Template Categories Overview
```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[2] as "Category",
  length(filter(file.lists, (item) => item)) as "Template Count"
FROM "Resources/Templates"
WHERE file.name != "_about_"
GROUP BY split(file.folder, "/")[2]
SORT split(file.folder, "/")[2] ASC
```

## 🏗️ Template Structure

### Template Organization
```
Resources/Templates/
├── 📞 callouts/           # [[#Callout Templates]]
├── 📊 dataview/           # [[#Dataview Templates]]
├── 🕐 periodic/           # [[#Periodic Templates]]
└── 👥 Team Member/        # [[#Team Member Templates]]
```

### Template Naming Convention
- **Descriptive Names**: Clear purpose and usage
- **Category Prefix**: Organized by functional area
- **Template Suffix**: Clearly marked as templates
- **Version Control**: Track template evolution

## 👥 Team Member Templates

> **Profile System**: Comprehensive team member documentation and development tracking

### Core Team Member Templates
| Template | Purpose | Location |
|----------|---------|----------|
| [[Resources/Templates/Team Member/Team Member Home  Note Template]] | Main profile overview | Primary dashboard |
| [[Resources/Templates/Team Member/Team Member Career Path Note Template]] | Development tracking | Career progression |
| [[Resources/Templates/Team Member/Team Member Communication Preferences Note Template]] | Work style preferences | Communication guide |
| [[Resources/Templates/Team Member/Team Member Contact Info Note Template]] | Contact details | Reference information |
| [[Resources/Templates/Team Member/Team Member One on One Section Template]] | Meeting structure | 1:1 documentation |
| [[Resources/Templates/Team Member/Team Member Stay Interview Note Template]] | Retention conversations | Satisfaction tracking |
| [[Resources/Templates/Team Member/Team Member Year In Review Note Template]] | Annual reviews | Performance documentation |

### Team Member Template Usage
```dataview
LIST
FROM "Resources/Templates/Team Member"
WHERE file.name != "_about_"
SORT file.name ASC
```

### Team Member Profile Structure
```
Team Member Name/
├── 📄 [Name].md                    # Home template
├── 🎯 [Name] - Career Path.md      # Career template
├── 📞 [Name] - Communication.md    # Communication template
├── 📧 [Name] - Contact Info.md     # Contact template
├── 📝 [Name] - One on One.md       # Meeting template
├── 🔄 [Name] - Stay Interview.md   # Retention template
└── 📅 [Name] - Year Review.md      # Review template
```

### Team Member Template Features
- **Consistent Structure**: Standardized information organization
- **QuickAdd Integration**: Automated profile creation
- **Cross-referencing**: Linked documentation system
- **Progress Tracking**: Development and career progression
- **Communication Focus**: Preference and style documentation

## 📝 Callout Templates

> **Content Blocks**: Structured information presentation for consistent documentation

### Callout Template Library
| Template | Purpose | Visual Cue | Usage |
|----------|---------|------------|-------|
| [[Resources/Templates/callouts/Highlight Callout Template]] | Achievements and wins | 🌟 | Success celebration |
| [[Resources/Templates/callouts/Challenge Callout Template]] | Issues and obstacles | ⚠️ | Problem documentation |
| [[Resources/Templates/callouts/Demo Callout Template]] | Presentations and showcases | 🚀 | Work demonstration |
| [[Resources/Templates/callouts/Follow-up Callout Template]] | Action items and next steps | 📞 | Task tracking |
| [[Resources/Templates/callouts/Personal Note Callout Template]] | Individual observations | 👤 | Personal insights |
| [[Resources/Templates/callouts/Professional Note Callout Template]] | Work-related documentation | 💼 | Business notes |
| [[Resources/Templates/callouts/Talent Development Callout Template]] | Growth and learning | 📈 | Development tracking |

### Callout Template Structure
```markdown
> [!callout-type] Title
> **Context**: Situation or background
> **Details**: Specific information or observations
> **Action**: Next steps or follow-up required
> **Date**: When this occurred or was documented
```

### Callout Usage Guidelines
- **Consistent Format**: Use template structure for all callouts
- **Clear Purpose**: Each callout type serves specific documentation needs
- **Visual Consistency**: Icons and formatting maintain system coherence
- **Searchable Content**: Structured format enables easy information retrieval

## 📊 Dataview Templates

> **Dynamic Content**: Automated information aggregation and presentation

### Dataview Template Collection
| Template | Purpose | Data Source | Output |
|----------|---------|-------------|--------|
| [[Resources/Templates/dataview/One on Ones Dataview Template]] | Meeting overview | Team member notes | Meeting schedule |
| [[Resources/Templates/dataview/Highlights Dataview Template]] | Achievement summary | Highlight callouts | Success tracking |
| [[Resources/Templates/dataview/Challenges Dataview Template]] | Issue tracking | Challenge callouts | Problem monitoring |
| [[Resources/Templates/dataview/Demos Dataview Template]] | Presentation log | Demo callouts | Showcase history |
| [[Resources/Templates/dataview/Personal Notes  Dataview Template]] | Individual insights | Personal callouts | Private observations |
| [[Resources/Templates/dataview/Professional Notes Dataview Template]] | Work documentation | Professional callouts | Business records |
| [[Resources/Templates/dataview/Talent Development Dataview Template]] | Growth tracking | Development callouts | Progress monitoring |

### Dataview Template Features
- **Real-time Updates**: Content automatically refreshes as data changes
- **Filtered Views**: Targeted information presentation
- **Sortable Results**: Organized by date, priority, or other criteria
- **Cross-reference**: Links related information across the system

### Dataview Query Structure
```javascript
// Basic template structure
TABLE WITHOUT ID
  file.link as "Item",
  file.mtime as "Last Updated",
  choice(condition, "Value A", "Value B") as "Status"
FROM "source/path"
WHERE filtering_criteria
SORT file.mtime DESC
LIMIT number_of_results
```

## 🕐 Periodic Templates

> **Time-based Planning**: Daily, weekly, and monthly structure for consistent planning and reflection

### Periodic Template Types
| Template | Frequency | Purpose | Key Sections |
|----------|-----------|---------|--------------|
| [[Resources/Templates/periodic/Daily Note Template]] | Daily | Planning and reflection | Focus, accomplishments, challenges |
| [[Resources/Templates/periodic/Weekly Note Template]] | Weekly | Review and planning | Achievements, goals, next week |

### Daily Note Template Structure
```markdown
# {{date:YYYY-MM-DD}} - {{date:dddd}}

## 🎯 Today's Focus
- [ ] Priority 1
- [ ] Priority 2
- [ ] Priority 3

## 📊 Team Updates
- Team member interactions
- Project progress updates
- Issues requiring attention

## 💼 Work Accomplishments
- Completed tasks
- Progress on projects
- Important decisions made

## 🌟 Highlights
- Successes and wins
- Positive moments
- Learning opportunities

## ⚠️ Challenges
- Obstacles encountered
- Issues to resolve
- Support needed

## 🤔 Reflection
- What went well today?
- What could be improved?
- Key learnings

## 📅 Tomorrow's Prep
- [ ] Priority tasks for tomorrow
- [ ] Meetings and commitments
- [ ] Follow-up items
```

### Weekly Note Template Structure
```markdown
# Week of {{date:YYYY-MM-DD}}

## 📈 This Week's Achievements
- Major accomplishments
- Goals completed
- Significant progress

## 🎯 Goal Progress Review
- Team development goals
- Professional development
- Project milestones

## 👥 Team Highlights
- Team member growth
- Successful collaborations
- Team achievements

## ⚠️ Challenges and Lessons
- Issues encountered
- Problems solved
- Lessons learned

## 🔄 Process Improvements
- What worked well
- What needs adjustment
- Process optimizations

## 🎯 Next Week's Focus
- Priority objectives
- Key meetings and events
- Important deadlines
```

## 📊 Project Templates

> **Project Management**: Structured approach to project planning, execution, and tracking

### Project Template Categories
- **Project Charter**: Initial project definition and scope
- **Project Plan**: Detailed planning and timeline
- **Status Reports**: Regular progress communication
- **Retrospectives**: Post-project lessons learned

### Project Template Structure
```markdown
# Project: [Project Name]

## 📋 Project Overview
- **Objective**: What we're trying to achieve
- **Scope**: What's included and excluded
- **Timeline**: Key dates and milestones
- **Team**: Who's involved and their roles

## 🎯 Success Criteria
- [ ] Deliverable 1
- [ ] Deliverable 2
- [ ] Deliverable 3

## 📊 Progress Tracking
- **Status**: Current state
- **Completed**: What's been finished
- **In Progress**: Current work
- **Blocked**: Issues requiring resolution

## 👥 Team and Stakeholders
- **Project Team**: Core team members
- **Stakeholders**: Key interested parties
- **Communication Plan**: How we'll stay connected

## 📅 Timeline and Milestones
- **Phase 1**: Initial setup and planning
- **Phase 2**: Core development and execution
- **Phase 3**: Testing and refinement
- **Phase 4**: Delivery and closure

## 🔄 Lessons Learned
- What worked well
- What could be improved
- Recommendations for future projects
```

## 🎯 Template Management Workflows

### Template Creation Process
1. **Identify Need**: Recognize recurring documentation pattern
2. **Design Structure**: Create consistent, reusable format
3. **Test Template**: Validate with actual use cases
4. **Refine Content**: Improve based on usage feedback
5. **Document Usage**: Provide clear usage guidelines

### Template Maintenance
1. **Regular Review**: Monthly template assessment
2. **Usage Analysis**: Track which templates are most valuable
3. **Update Content**: Improve based on user feedback
4. **Version Control**: Track template evolution
5. **Archive Unused**: Remove outdated or unused templates

### Template Integration
1. **QuickAdd Setup**: Configure automated template application
2. **Script Integration**: Connect templates with automation
3. **Cross-referencing**: Link related templates together
4. **User Training**: Educate team on template usage
5. **Feedback Loop**: Continuous improvement based on usage

## 📊 Template Analytics

### Most Used Templates
```dataview
TABLE WITHOUT ID
  file.link as "Template",
  file.ctime as "Created",
  choice(file.mtime >= date(today) - dur(30 days), "🟢 Active", "🟡 Stable") as "Status"
FROM "Resources/Templates"
WHERE file.name != "_about_"
SORT file.mtime DESC
LIMIT 10
```

### Template Health Check
- **Usage Frequency**: How often templates are applied
- **Update Frequency**: How often templates are modified
- **User Satisfaction**: Feedback on template effectiveness
- **Integration Success**: How well templates work with automation

## 🔗 Related Resources

### Automation Integration
- [[60 - Automation MOC]] - Scripts and automated workflows
- [[Resources/quickadd/]] - QuickAdd configurations and scripts
- [[Resources/scripts/]] - JavaScript automation and selection tools

### System Integration
- [[10 - Team Management MOC]] - Team member template usage
- [[40 - Journal MOC]] - Periodic template applications
- [[20 - Projects MOC]] - Project template integration
- [[70 - Resources MOC]] - Template storage and organization

### Template Development
- **Best Practices**: Guidelines for creating effective templates
- **Design Patterns**: Common template structures and approaches
- **User Experience**: Making templates easy and intuitive to use
- **Maintenance**: Keeping templates current and useful

---

**🎯 Template Usage Tips**:
- Choose the right template for your specific need
- Customize templates to fit your team's unique requirements
- Use templates consistently to maintain system coherence
- Regularly review and update templates based on usage patterns
- Train team members on proper template usage and benefits

*Connected to: [[00 - Master MOC]] | [[10 - Team Management MOC]] | [[60 - Automation MOC]]*
