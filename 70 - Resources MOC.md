# 📚 Resources MOC

> Tools, references, utilities, and supporting materials for the Obsidian Management Starter Vault system.

## 🎯 Quick Navigation

### Resource Categories
- [[#Templates]] - All template files and structures
- [[#Scripts and Automation]] - JavaScript automation and tools
- [[#Configuration Files]] - System settings and options
- [[#Documentation]] - Guides, references, and instructions
- [[#Utilities]] - Helper tools and support files

### Quick Actions
- 📄 **Browse Templates**: Access template library
- 🔧 **Review Scripts**: Check automation components
- ⚙️ **System Configuration**: Modify system settings
- 📖 **Documentation**: Access guides and references

## 📈 Resources Dashboard

### Resource Overview
```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[1] as "Category",
  length(file.lists) as "Items",
  file.mtime as "Last Updated"
FROM "Resources"
WHERE file.name != "_about_" AND file.name != "README.md"
SORT file.mtime DESC
LIMIT 10
```

### Recent Resource Updates
```dataview
TABLE WITHOUT ID
  file.link as "Resource",
  split(file.folder, "/")[1] as "Category",
  choice(contains(file.name, ".js"), "🔧 Script", choice(contains(file.name, "Template"), "📄 Template", "📋 Config")) as "Type",
  file.mtime as "Modified"
FROM "Resources"
WHERE file.mtime >= date(today) - dur(30 days)
SORT file.mtime DESC
```

### Resource Categories Summary
```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[1] as "Category",
  count(file.name) as "File Count",
  sum(file.size) as "Total Size (bytes)"
FROM "Resources"
WHERE file.name != "_about_"
GROUP BY split(file.folder, "/")[1]
SORT split(file.folder, "/")[1] ASC
```

## 🏗️ Resource Structure

### Resource Organization
```
Resources/
├── 📄 Templates/              # [[#Templates]]
│   ├── callouts/              # Callout templates
│   ├── dataview/              # Dataview templates
│   ├── periodic/              # Time-based templates
│   └── Team Member/           # Team member templates
├── 🔧 scripts/                # [[#Scripts and Automation]]
├── ⚡ quickadd/               # QuickAdd configurations
│   ├── scripts/               # QuickAdd automation
│   └── templates/             # QuickAdd templates
├── 🎨 copilot-custom-prompts/ # AI assistance prompts
└── 📚 memory-bank/            # Documentation system
```

### Resource Naming Conventions
- **Templates**: Descriptive name + "Template.md"
- **Scripts**: Functional name + ".js"
- **Configuration**: Purpose + "Options.md"
- **Documentation**: Clear descriptive names

## 📄 Templates

> **Template Library**: Comprehensive collection of reusable content structures

### Template Categories
| Category | Location | Purpose | Count |
|----------|----------|---------|-------|
| **Callouts** | `Resources/Templates/callouts/` | Structured content blocks | 7 |
| **Dataview** | `Resources/Templates/dataview/` | Dynamic content queries | 7 |
| **Periodic** | `Resources/Templates/periodic/` | Time-based notes | 2 |
| **Team Member** | `Resources/Templates/Team Member/` | Profile management | 7 |

### Template Inventory
```dataview
TABLE WITHOUT ID
  file.link as "Template",
  split(file.folder, "/")[2] as "Category",
  file.size as "Size",
  file.mtime as "Last Modified"
FROM "Resources/Templates"
WHERE file.name != "_about_"
SORT split(file.folder, "/")[2] ASC, file.name ASC
```

### Template Usage Guidelines
- **Consistent Structure**: All templates follow standardized format
- **Clear Purpose**: Each template serves specific documentation needs
- **Integration Ready**: Templates designed for automation integration
- **Maintainable**: Regular updates and improvements based on usage

### Template Development Process
1. **Identify Pattern**: Recognize recurring documentation needs
2. **Design Structure**: Create reusable format with variables
3. **Test Implementation**: Validate with real use cases
4. **Document Usage**: Provide clear instructions and examples
5. **Integrate System**: Connect with automation and workflows

## 🔧 Scripts and Automation

> **Automation Library**: JavaScript scripts and automation tools

### Script Categories
| Script Type | Purpose | Integration | Files |
|-------------|---------|-------------|-------|
| **Callout Scripts** | Content block creation | Manual/Template | 5 |
| **Selection Scripts** | User interface menus | QuickAdd/Manual | 3 |
| **Team Management** | Profile automation | QuickAdd | 2 |
| **Utility Scripts** | Helper functions | System-wide | 3 |

### Core Script Library
```dataview
TABLE WITHOUT ID
  file.link as "Script",
  file.size as "Size (bytes)",
  file.mtime as "Last Modified",
  choice(file.mtime >= date(today) - dur(30 days), "🟢 Active", choice(file.mtime >= date(today) - dur(90 days), "🟡 Stable", "🔴 Stale")) as "Status"
FROM "Resources/scripts"
WHERE contains(file.name, ".js")
SORT file.name ASC
```

### Script Functionality Overview
- **Action Callout**: [[Resources/scripts/action_callout.js]] - Task-focused callouts
- **Info Callout**: [[Resources/scripts/info_callout.js]] - Information presentation
- **Build Info Callout**: [[Resources/scripts/build_info_callout.js]] - Enhanced info blocks
- **Callout Dataview**: [[Resources/scripts/callout_dataview.js]] - Dynamic content callouts
- **Type Selection**: [[Resources/scripts/callout_type_selection.js]] - Callout type picker
- **Focus Selection**: [[Resources/scripts/callout_focus_selection.js]] - Focus area picker
- **Team Selection**: [[Resources/scripts/team_member_selection.js]] - Team member picker
- **Note Movement**: [[Resources/scripts/team_member_note_move.js]] - File organization

### Script Integration Points
- **QuickAdd**: Rapid content creation workflows
- **Template System**: Automated template application
- **User Interface**: Selection menus and interactions
- **File Management**: Automated organization and structure

## ⚙️ Configuration Files

> **System Configuration**: Settings, options, and configuration data

### Configuration Categories
| Type | Purpose | Location | Usage |
|------|---------|----------|-------|
| **Selection Options** | User interface choices | `Resources/scripts/` | Menu systems |
| **Team Member Data** | Team selection lists | `Resources/` | Team workflows |
| **QuickAdd Config** | Automation settings | `Resources/quickadd/` | Rapid creation |
| **System Settings** | Global preferences | Various locations | System behavior |

### Configuration Files Overview
```dataview
TABLE WITHOUT ID
  file.link as "Configuration",
  choice(contains(file.name, "Selection"), "🎯 Selection", choice(contains(file.name, "Options"), "⚙️ Options", "📋 Config")) as "Type",
  file.mtime as "Last Modified"
FROM "Resources"
WHERE contains(file.name, "Options") OR contains(file.name, "Selection")
SORT file.name ASC
```

### Key Configuration Files
- **Callout Focus Options**: [[Resources/scripts/Callout Focus Selection Options.md]]
- **Callout Type Options**: [[Resources/scripts/Callout Type Selection Options.md]]
- **Team Member Options**: [[Resources/Team Member Selection Options.md]]
- **QuickAdd Templates**: [[Resources/quickadd/templates/Team Member Quick Add Template.md]]

### Configuration Management
- **Version Control**: Track changes to configuration files
- **Documentation**: Clear explanation of configuration options
- **Validation**: Ensure configuration integrity
- **Backup**: Maintain backups of critical configurations

## 📚 Documentation

> **Knowledge Base**: Guides, references, and system documentation

### Documentation Categories
| Category | Purpose | Location | Scope |
|----------|---------|----------|-------|
| **Memory Bank** | Project documentation | `Resources/memory-bank/` | System context |
| **Script Documentation** | Technical references | `Resources/scripts/README.md` | Development |
| **Usage Guides** | User instructions | Various MOCs | User guidance |
| **System Architecture** | Design documentation | Memory bank files | System design |

### Documentation Structure
```
Resources/memory-bank/
├── 📄 projectbrief.md         # Project overview and requirements
├── 🎯 productContext.md       # Purpose and user experience
├── 🏗️ systemPatterns.md       # Architecture and design patterns
├── 🔧 techContext.md          # Technical implementation
├── 📊 activeContext.md        # Current work and focus
└── 📈 progress.md             # Status and achievements
```

### Documentation Standards
- **Clarity**: Clear, concise explanations
- **Completeness**: Comprehensive coverage of topics
- **Currency**: Regular updates to maintain accuracy
- **Accessibility**: Easy to find and understand
- **Integration**: Connected to relevant system components

### Documentation Maintenance
```dataview
TABLE WITHOUT ID
  file.link as "Documentation",
  file.size as "Size (bytes)",
  file.mtime as "Last Updated",
  choice(file.mtime >= date(today) - dur(14 days), "🟢 Current", choice(file.mtime >= date(today) - dur(60 days), "🟡 Review Needed", "🔴 Update Required")) as "Status"
FROM "Resources/memory-bank"
SORT file.mtime DESC
```

## 🛠️ Utilities

> **Helper Tools**: Supporting utilities and enhancement tools

### Utility Categories
- **Copilot Prompts**: AI assistance enhancement
- **Archive Resources**: Historical templates and references
- **Development Tools**: System development utilities
- **Integration Helpers**: Cross-system connectivity tools

### Copilot Custom Prompts
```dataview
TABLE WITHOUT ID
  file.link as "Prompt",
  replace(file.name, ".md", "") as "Function",
  file.mtime as "Last Modified"
FROM "Resources/copilot-custom-prompts"
WHERE file.name != "_about_"
SORT file.name ASC
```

### Copilot Prompt Library
| Prompt | Purpose | Usage |
|--------|---------|-------|
| [[Resources/copilot-custom-prompts/Emojify.md]] | Add emojis to text | Content enhancement |
| [[Resources/copilot-custom-prompts/Explain like I am 5.md]] | Simplify explanations | Communication |
| [[Resources/copilot-custom-prompts/Fix grammar and spelling.md]] | Text correction | Quality improvement |
| [[Resources/copilot-custom-prompts/Generate glossary.md]] | Create term definitions | Documentation |
| [[Resources/copilot-custom-prompts/Generate table of contents.md]] | Create TOC | Structure |
| [[Resources/copilot-custom-prompts/Make longer.md]] | Expand content | Content development |
| [[Resources/copilot-custom-prompts/Make shorter.md]] | Condense content | Summarization |
| [[Resources/copilot-custom-prompts/Remove URLs.md]] | Clean up links | Text processing |
| [[Resources/copilot-custom-prompts/Rewrite as tweet.md]] | Social media format | Communication |
| [[Resources/copilot-custom-prompts/Rewrite as tweet thread.md]] | Thread format | Extended communication |
| [[Resources/copilot-custom-prompts/Simplify.md]] | Simplify complexity | Accessibility |
| [[Resources/copilot-custom-prompts/Summarize.md]] | Create summaries | Information processing |

### Archive Resources
```dataview
LIST
FROM "Archive/Resources"
WHERE file.name != "_about_"
SORT file.name ASC
```

### Development Utilities
- **Script Templates**: Standardized script structures
- **Testing Frameworks**: Validation and testing tools
- **Documentation Templates**: Consistent documentation format
- **Integration Patterns**: Common integration approaches

## 🎯 Resource Management Workflows

### Resource Lifecycle
1. **Creation**: Develop new resources based on identified needs
2. **Testing**: Validate resources with real use cases
3. **Documentation**: Create clear usage instructions
4. **Integration**: Connect with existing system components
5. **Maintenance**: Regular updates and improvements
6. **Archival**: Retire outdated or unused resources

### Quality Assurance
- **Functionality Testing**: Ensure resources work as intended
- **Integration Testing**: Validate cross-system compatibility
- **Documentation Review**: Maintain accurate and helpful documentation
- **Performance Monitoring**: Track resource usage and effectiveness
- **User Feedback**: Collect and integrate improvement suggestions

### Resource Optimization
```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[1] as "Category",
  count(file.name) as "Files",
  avg(file.size) as "Avg Size",
  max(file.mtime) as "Last Activity"
FROM "Resources"
WHERE file.name != "_about_"
GROUP BY split(file.folder, "/")[1]
SORT max(file.mtime) DESC
```

## 📊 Resource Analytics

### Usage Patterns
- **Most Accessed**: Templates and scripts with highest usage
- **Integration Success**: Resources with best system integration
- **Maintenance Needs**: Resources requiring updates or improvements
- **Performance Impact**: Resource efficiency and system impact

### Resource Health Metrics
```dataview
TABLE WITHOUT ID
  file.link as "Resource",
  file.size as "Size",
  choice(file.mtime >= date(today) - dur(30 days), "🟢 Active", choice(file.mtime >= date(today) - dur(90 days), "🟡 Stable", "🔴 Needs Review")) as "Health",
  file.mtime as "Last Modified"
FROM "Resources"
WHERE file.name != "_about_" AND file.name != "README.md"
SORT file.mtime DESC
LIMIT 15
```

### System Integration Status
- **Template Integration**: How well templates work with automation
- **Script Performance**: Execution efficiency and reliability
- **Configuration Accuracy**: Correctness of system settings
- **Documentation Currency**: Up-to-date and accurate information

## 🔗 Related Systems

### Core MOCs
- [[00 - Master MOC]] - Central navigation and system overview
- [[50 - Templates MOC]] - Detailed template library and usage
- [[60 - Automation MOC]] - Scripts and automation workflows
- [[10 - Team Management MOC]] - Team member resource integration

### External Integrations
- **Obsidian Plugins**: QuickAdd, Dataview, Templater, Copilot
- **Git Version Control**: Resource versioning and backup
- **File System**: Organized resource storage and access
- **Development Environment**: Script development and testing

### Maintenance Connections
- **Memory Bank**: System documentation and context
- **Archive System**: Historical resource management
- **Quality Assurance**: Testing and validation processes
- **User Training**: Resource usage education and support

---

**🎯 Resource Management Tips**:
- Regularly review and update resources based on usage patterns
- Maintain clear documentation for all resources
- Test resources thoroughly before deployment
- Monitor system performance and resource impact
- Collect user feedback for continuous improvement

*Connected to: [[00 - Master MOC]] | [[50 - Templates MOC]] | [[60 - Automation MOC]]*
